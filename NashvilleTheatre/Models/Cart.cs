using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NashvilleTheatre.Models
{

    public class Cart
    {
        public int Uid { get; set; }
        public int CartId { get; set; }
        public DateTime CartCreationDate { get; set; }
        public List<ShowLineItem> ShowLineItem { get; set; }
        public List<SubscriptionLineItem> SubscriptionLineItem { get; set; }
        public decimal Total { get; set; }

        public static Cart BuildCart(int uid, int cartid, List<ShowLineItem> shows, List<SubscriptionLineItem> subscriptions)
        {
            Cart cart = new Cart
            {
                Uid = uid,
                CartId = cartid,
                CartCreationDate = DateTime.Today,
                SubscriptionLineItem = subscriptions,
                ShowLineItem = shows
            };

            if (shows == null)
            {
            cart.Total = subscriptions.Sum(item => item.ItemPrice);
            }
            else if (subscriptions == null)
            {
            cart.Total = shows.Sum(item => item.ItemPrice);
            }
            else
            {
            cart.Total = shows.Sum(item => item.ItemPrice) + subscriptions.Sum(item => item.ItemPrice);
            };
            return cart;
        }

    }
}

    
