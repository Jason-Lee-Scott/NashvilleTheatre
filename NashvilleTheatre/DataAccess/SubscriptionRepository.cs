using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using NashvilleTheatre.Commands;
using NashvilleTheatre.Models;
using System.Data.SqlClient;

namespace NashvilleTheatre.DataAccess
{
    public class SubscriptionRepository
    {
        string ConnectionString;

        public SubscriptionRepository(IConfiguration config)
        {
            ConnectionString = config.GetConnectionString("NashvilleTheatre");
        }

        public List<Subscription> AllSubscriptions()
        {
            var sql = "select * from Subscription";

            using (var db = new SqlConnection(ConnectionString))
            {
                var subscriptions = db.Query<Subscription>(sql).ToList();
                return subscriptions;
            }
        }

        public List<Subscription> AllSubscriptionsByUserTypeId(int userTypeId)
        {
            var sql = "select * from Subscription where UserTypeId = @UserTypeId";

            var parameters = new { UserTypeId = userTypeId };

            using (var db = new SqlConnection(ConnectionString))
            {
                var subscriptions = db.Query<Subscription>(sql, parameters).ToList();
                return subscriptions;
            }
        }
    }
}
