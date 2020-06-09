using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using NashvilleTheatre.Models;
using System.Data.SqlClient;

namespace NashvilleTheatre.DataAccess
{
    public class TheatreCoRepository
    {
        string ConnectionString;
        public TheatreCoRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }
        public List<TheatreCompany> GetAllTheatreCompanies()
        {
            var sql = "select * from TheatreCompany";

            using (var db = new SqlConnection(ConnectionString))
            {
                var companies = db.Query<TheatreCompany>(sql).ToList();
                return companies;
            }
        }
        public IEnumerable<TheatreCompany> GetTheatreCoById(int theatreCompanyId)
        {

            var sql = @"
                        select * from TheatreCompany
	                    where TheatreCoId = @theatreCompanyId
                        ";

            var parameters = new
            {
                TheatreCompanyId = theatreCompanyId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var theatreCoById = db.Query<TheatreCompany>(sql, parameters);
                return theatreCoById;
            }
        }
    }
}
