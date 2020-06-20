using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{
    public class ShowWithDateAndVenueName
    {
        public int ShowId { get; set; }
        public string ShowName { get; set; }
        public string ShowImageUrl { get; set; }
        public int VenueId { get; set; }
        public string VenueName { get; set; }
        public int TheatreCoId { get; set; }
        public string TheatreCompanyName { get; set; }
        public DateTime ShowDateTime { get; set; }
    }
    
}
