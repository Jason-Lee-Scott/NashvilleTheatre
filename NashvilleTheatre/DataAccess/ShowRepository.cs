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
    public class ShowRepository
    {
        string ConnectionString;
        public ShowRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }

        //const string ConnectionString = "Server=localhost;Database=NashvilleTheatreDB;Trusted_Connection=True;";

        public List<Show> GetAllShows()
        {
            var sql = @"select * from Show";

            using (var db = new SqlConnection(ConnectionString))
            {
                var shows = db.Query<Show>(sql).ToList();
                return shows;
            }
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
    }
}
