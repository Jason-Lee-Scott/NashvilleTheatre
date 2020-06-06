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

        public List<TheatreCompany> GetAllTheatreCompanies()
        {
            var sql = "select * from TheatreCompany";

            using (var db = new SqlConnection(ConnectionString))
            {
                var companies = db.Query<TheatreCompany>(sql).ToList();
                return companies;
            }
        }

        public CategorySummary GetSummaryByCategory(string category)
        {
            var sql = @"with category_view as(
                        select top(3) ShowName, CategoryName 
                        from Show as sh
                        join Category as c on sh.CategoryId = c.CategoryId
                        where CategoryName = @Category
                        order by ShowName
                        ), ShowList as(
                        select
                           distinct  
                            stuff((
                                select ', ' + cv.ShowName
                                from category_view cv
                                where cv.ShowName = ShowName
                                order by cv.ShowName
                                for xml path('')
                            ),1,2,'') as ShowList
                        from category_view 
                        group by ShowName
                        ), CategorySummary as(
                        select CategoryName, count(*) as CategoryTotal from Category as c
                        join Show as sh on sh.CategoryId = c.CategoryId
                        where CategoryName = @Category
                        group by CategoryName
                        )
                        select * from CategorySummary, ShowList";

            var parameters = new
            {
                Category = category
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var summary = db.QueryFirstOrDefault<CategorySummary>(sql, parameters);
                return summary;
            }
        }

        //public Pickle GetById(int id)
        //{
        //    var query = @"select *
        //                  from Pickle
        //                  where id = @id";

        //    using (var db = new SqlConnection(ConnectionString))
        //    {
        //        var parameters = new { Id = id };

        //        var pickle = db.QueryFirstOrDefault<Pickle>(query, parameters);
        //        return pickle;
        //    }
        //}

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
    }
}
