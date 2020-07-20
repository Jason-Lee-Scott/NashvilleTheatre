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
    public class CartRepository
    {
        string ConnectionString;

        public CartRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }

        public int GetUsersCartId(int uid)
        {
            var sql = "SELECT [CartId] FROM [Cart] WHERE [Uid] = @uid";

            using(var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var result = db.QueryFirst<int>(sql, parameters);
                return result;
            }
        }

        public int GetUsersCart(int uid)
        {
            var sql = "SELECT * FROM [Cart] WHERE [Uid] = @uid";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var result = db.QueryFirst<int>(sql, parameters);
                return result;
            }
        }
    }
}
