using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class ShowOrder
    {
        public int OrderId { get; set; }
        public int ShowId { get; set; }
        public int UserId { get; set; }
        public int CreditPrice { get; set; }
        public DateTime ShowOrderDate { get; set; }
    }

    public class ShowOrdersByUser
    {
        public int OrderId { get; set; }
        public string ShowName { get; set; }
        public string Synopsis { get; set; }
        public int CreditCost { get; set; }
        public DateTime ShowDateTime { get; set; }
        public DateTime ShowOrderDate { get; set; }
    }
}
