using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Commands
{
    public class TheatreOrdersWithCustomers
    {
        public int TheatreCoId { get; set; }
        public string TheatreCompanyName { get; set; }
        public int ShowId { get; set; }
        public string ShowName { get; set; }
        public int CreditCost { get; set; }
        public int OrderId { get; set; }
        public DateTime ShowOrderDate { get; set; }
        public DateTime ShowDateTime { get; set; }
        public int Uid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int TotalCredits { get; set; }
        public int SubscriptionId { get; set; }
        public int UserTypeId { get; set; }
    }
}
