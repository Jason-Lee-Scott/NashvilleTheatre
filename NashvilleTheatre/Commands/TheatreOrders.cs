using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Commands
{
    public class TheatreOrders
    {
        public int TheatreCoId { get; set; }
        public string TheatreCompanyName { get; set; }
        public int OrderId { get; set; }
        public DateTime ShowOrderDate { get; set; }
        public int Uid { get; set; }
        public int ShowId { get; set; }
        public string ShowName { get; set; }
        public int CreditCost { get; set; }
    }
}
