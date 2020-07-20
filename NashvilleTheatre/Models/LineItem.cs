using System;
namespace NashvilleTheatre.Models
{
    public class LineItem
    {
        public int CartId { get; set; }
        public int LineItemId { get; set; }
        public string LineItemType { get; set; }
        public int ProductId { get; set; }
        public int Quantity { get; set; }
        public DateTime DateAdded { get; set; }
    }

    public class ShowLineItem
    {
        public int LineItemId { get; set; }
        public string ItemName { get; set; }
        public DateTime ShowDateTime { get; set; }
        public int Quantity { get; set; }
        public decimal ItemPrice { get; set; }
    }

    public class SubscriptionLineItem
    {
        public int LineItemId { get; set; }
        public string ItemName { get; set; }
        public decimal ItemPrice { get; set; }
        public int Quantity { get; set; }
    }

}
