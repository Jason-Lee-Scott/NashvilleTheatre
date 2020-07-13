using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class Cart
    {
        public int Uid { get; set; }
        public decimal Total { get; set; }
        public DateTime CartCreationDate { get; set; }
    }
}
