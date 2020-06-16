using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
    }

    public class CategorySummary
    {
        public string CategoryName { get; set; }
        public int CategoryTotal { get; set; }
        public List<ShowNameOnly> ShowList { get; set; }
    }
}
