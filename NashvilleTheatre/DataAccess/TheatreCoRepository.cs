using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using NashvilleTheatre.Models;
using System.Data.SqlClient;
using NashvilleTheatre.Commands;

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

        public IEnumerable<TheatreOrdersWithCustomers> GetTheatreCoOrdersWithCustomerInfoById(int theatreCompanyId)
        {
            var sql = @"SELECT TheatreCompany.*, 
                        Show.ShowId, Show.ShowName, Show.CreditCost, 
                        ShowOrder.OrderId, ShowOrder.ShowOrderDate,
                        ShowDateTime.ShowDateTime,
                        [User].*
                        FROM TheatreCompany 
                        join Show ON show.TheatreCoId = TheatreCompany.TheatreCoId
                        join ShowOrder ON ShowOrder.ShowId = Show.ShowId
                        join [User] ON [User].[Uid] = ShowOrder.[Uid]
                        join ShowDateTime ON ShowDateTime.ShowDateTimeId = ShowOrder.ShowDateTimeId
                        WHERE TheatreCompany.TheatreCoId = @theatreCompanyId
                        ORDER BY TheatreCompany.TheatreCompanyName";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    TheatreCompanyId = theatreCompanyId
                };

                var ordersWithCustomers = db.Query<TheatreOrdersWithCustomers>(sql, parameters);
                return ordersWithCustomers;
            }
                                }

        public IEnumerable<TheatreOrders> GetAllTheatreCoOrdersById(int theatreCompanyId)
        {
            var sql = @"SELECT TheatreCompany.*,
                        ShowOrder.OrderId, ShowOrder.ShowOrderDate, ShowOrder.[Uid],
                        Show.ShowId, Show.ShowName, Show.CreditCost
                        FROM showOrder
                        JOIN Show
                        ON show.ShowId = ShowOrder.ShowId
                        JOIN TheatreCompany
                        ON TheatreCompany.TheatreCoId = Show.TheatreCoId
                        WHERE TheatreCompany.TheatreCoId = @theatreCompanyId
                        ORDER BY TheatreCoId;";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new
                {
                    TheatreCompanyId = theatreCompanyId
                };

                var theatreOrders = db.Query<TheatreOrders>(sql, parameters);
                return theatreOrders;
            }

        }

        public IEnumerable<ShowOrdersByMonthByTheatreCo> GetAllTheatreCoOrdersThisMonth(int theatreCoId)
        {
            var sql = @"select OrderId, TheatreCompanyName, ShowName, ShowOrderDate, CreditCost from ShowOrder as so
                        join Show as sh on sh.ShowId = so.ShowId
                        join TheatreCompany as tc on tc.TheatreCoId = sh.TheatreCoId
                        where tc.TheatreCoId = @TheatreCoId
                        and month(ShowOrderDate) = month(getdate())";

            var parameters = new { TheatreCoId = theatreCoId };

            using (var db = new SqlConnection(ConnectionString))
            {
                var totalSales = db.Query<ShowOrdersByMonthByTheatreCo>(sql, parameters);
                return totalSales;
            }
        }

        public IEnumerable<Sales> GetAllTheatreCoTotalSalesByMonth(int theatreCoId)
        {
            var sql = @"select datename(month, ShowOrderDate) 'Month', SUM(CreditCost) 'TotalCredits' from ShowOrder so
                        join Show as sh on sh.ShowId = so.ShowId
                        join TheatreCompany as tc on tc.TheatreCoId = sh.TheatreCoId
                        where tc.TheatreCoId = 4
                        group by month(ShowOrderDate), datename(month, ShowOrderDate), CreditCost
                        order by month(ShowOrderDate)";

            var parameters = new { TheatreCoId = theatreCoId };

            using (var db = new SqlConnection(ConnectionString))
            {
                var totalSales = db.Query<Sales>(sql, parameters);
                return totalSales;
            }
        }

    }
}
