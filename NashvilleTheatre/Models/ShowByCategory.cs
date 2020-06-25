using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class ShowByCategory
    {
        public int ShowId { get; set; }
        public int TheatreCoId { get; set; }
        public int VenueId { get; set; }
        public string ShowName { get; set; }
        public string Synopsis { get; set; }
        public int CreditCost { get; set; }
        public int CategoryId { get; set; }
        public string ShowImageUrl { get; set; }
        public string TheatreCompanyName { get; set; }
        public string CategoryName { get; set; }
        public string VenueName { get; set; }
        public string StreetAddress { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string ZipCode { get; set; }
        public int Capacity { get; set; }
        public string VenueImageUrl { get; set; }
        public List<DateTime> Dates { get; set; }

}

    public class ShowsWithDates
    {
        public string CategoryName { get; set; }
        public int CategoryId { get; set; }
        
        public int ShowId { get; set; }
    }
}
