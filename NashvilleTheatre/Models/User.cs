using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class User
    {
        public int UserId { get; set; }
        public int TotalCredits { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int SubscriptionId { get; set; }
        public int UserTypeId { get; set; }
    }
}
