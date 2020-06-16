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

        public List<Show> GetAllShows()
        {
            var sql = @"select * from Show";

            using (var db = new SqlConnection(ConnectionString))
            {
                var shows = db.Query<Show>(sql).ToList();
                return shows;
            }
        }

        public Show GetShowById(int showId)
        {
            var sql = @"select *
                        from Show
                        where ShowId = @showId";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { showId = showId };

                var show = db.QueryFirstOrDefault<Show>(sql, parameters);
                return show;
            }
        }

        public List<Show> GetShowsByTheatreCo(int theatreCompanyId)
        {

            var sql = @"
                        select * from Show
                        join TheatreCompany on Show.TheatreCoId = TheatreCompany.TheatreCoId
                        join ShowDateTime on Show.ShowId = ShowDateTime.ShowId
	                        where Show.TheatreCoId = @TheatreCompanyId
                        order by ShowDateTime";

            var parameters = new
            {
                TheatreCompanyId = theatreCompanyId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var showsByTheatreCo = db.Query<Show>(sql, parameters).ToList();
                return showsByTheatreCo;
            }
        }
    }
}