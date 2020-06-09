using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using NashvilleTheatre.Commands;
using NashvilleTheatre.Models;

namespace NashvilleTheatre.DataAccess
{
    public class UserRepository
    {
        string ConnectionString;
        public UserRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }

        

        public User AddNewUser(AddNewUserCommand newUser)
        {
            var sql = @"INSERT INTO [User](FirstName, LastName, Email)
                       output inserted.*
                        VALUES (@FirstName, @LastName, @Email);";

            using (var db = new SqlConnection(ConnectionString))
            {

                var parameters = new
                {
                    FirstName = newUser.FirstName,
                    LastName = newUser.LastName,
                    Email = newUser.Email
                };

                var result = db.QueryFirstOrDefault<User>(sql, parameters);
                return result;
            }
        }

        public int? GetIdByUserName(string firstName, string lastName, string email)
        {
            var sql = @"SELECT Uid FROM [User]
                        WHERE FirstName = @FirstName
                        AND LastName = @LastName
                        AND Email = @Email";

            var parameters = new
            {
                FirstName = firstName,
                LastName = lastName,
                Email = email
            };

            using (var db = new SqlConnection(ConnectionString))
            {
               

                var result = db.QueryFirstOrDefault<int>(sql, parameters);
                
                if (result != 0)
                {
                    return result;
                }
                else
                {
                    return null;
                }
            }
            
        }


        public List<ShowOrdersByUser> UserOrdersByTheatreCo(int userId, int theatreCoId)
        {
            var sql = @"
                        select * from ShowOrder
	                        join Show on Show.ShowId = ShowOrder.ShowId
	                        join TheatreCompany on TheatreCompany.TheatreCoId = Show.TheatreCoId
	                        join [User] on [User].Uid = ShowOrder.Uid
		                        where [User].Uid = @userId
		                        and TheatreCompany.TheatreCoId = @theatreCoId
                        order by ShowOrderDate";

            var parameters = new
            {
                TheatreCoId = theatreCoId,
                UserId = userId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var orders = db.Query<ShowOrdersByUser>(sql, parameters).ToList();
                return orders;
            }
        }
    }
}
