using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class Subscription
    {
        public int SubscriptionId { get; set; }
        public int Level { get; set; }
        public decimal Price { get; set; }
        public int Credits { get; set; }
        public int UserTypeId { get; set; }
        public string SubscriptionName { get; set; }
    }
}
