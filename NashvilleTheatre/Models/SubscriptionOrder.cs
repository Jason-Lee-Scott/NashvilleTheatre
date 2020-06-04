using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class SubscriptionOrder
    {
        public int SubscriptionOrderId { get; set; }
        public int UserId { get; set; }
        public int SubscriptionId { get; set; }
        public decimal Price { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
