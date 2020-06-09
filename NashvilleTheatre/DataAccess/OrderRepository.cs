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
    public class OrderRepository
    {
        string ConnectionString;
        DateTime CurrentTime = DateTime.Now;

        public OrderRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }

        public List<ShowOrdersByUser> GetOrdersByUserId(int userId)
        {
            var sql = @"select 
	                    OrderId, ShowName, Synopsis, CreditCost, ShowDateTime, ShowOrderDate
                        from ShowOrder as so
                        join Show as sh on so.ShowId = sh.ShowId
                        join ShowDateTime as std on std.ShowDateTimeId = so.ShowDateTimeId
                        where uid = @UserId";
            var parameters = new
            {
                UserId = userId
            };

            using (var db = new SqlConnection(ConnectionString))
            {
                var orders = db.Query<ShowOrdersByUser>(sql, parameters).ToList();
                return orders;
            }
        }

        public List<SubscriptionOrder> GetSubscriptionOrders()
        {
            var sql = "select * from SubscriptionOrder";

            using (var db = new SqlConnection(ConnectionString))
            {
                var subscriptions = db.Query<SubscriptionOrder>(sql).ToList();
                return subscriptions;
            }
        }

        public IEnumerable<SubscriptionOrder> CheckSubscriptionExistanceByUid(int uid)
        {
            var sql = @"SELECT [uid] FROM [SubscriptionOrder]
                    WHERE [uid] = @uid";

            using (var db = new SqlConnection(ConnectionString))
            {
                var parameters = new { Uid = uid };
                var result = db.Query<SubscriptionOrder>(sql, parameters);
                return result;
            }
        }

        public IEnumerable<SubscriptionOrder> CreateSubscriptionOrder(int uid, int subId)
        {
            var sql = @"
                      INSERT INTO [SubscriptionOrder]([Uid], [SubscriptionId], [SubscriptionOrderDate])
                        VALUES
                        (@uid,@subId,@SqlOrderDateTime)
                      ";

            using (var db = new SqlConnection(ConnectionString))
            {
                string SqlOrderDateTime = CurrentTime.ToString("yyyy-MM-dd HH:mm:ss.fff");
                var parameters = new { Uid = uid, SubId = subId, sqlOrderDateTime = SqlOrderDateTime };
                var result = db.Query<SubscriptionOrder>(sql, parameters);
                return result;
            }
        }
    }
}
