using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;
using NashvilleTheatre.Models;

namespace NashvilleTheatre.Controllers
{
    [Route("api/cart")]
    public class CartController : Controller
    {
        CartRepository _cartRepository;
        private readonly UserRepository _userRepository;
        private readonly LineItemRepository _lineItemRepository;

        public CartController(CartRepository repository, UserRepository userRepository, LineItemRepository lineItemRepository)
        {
            _cartRepository = repository;
            _userRepository = userRepository;
            _lineItemRepository = lineItemRepository;
        }

        // GET: api/cart/user/{uid}
        [HttpGet("user/{uid}")]
        public IActionResult GetUsersCartId(int uid)
        {
            var cartId = _cartRepository.GetUsersCartId(uid);

            return Ok(cartId);
        }


        [HttpGet("{uid}")]
        public IActionResult GetUserCart(int uid)
        {
            // 1. Get cart id fron uid
            var cartId = _cartRepository.GetUsersCartId(uid);
            // 2. Use cart id to get line items
            var lineItems = _lineItemRepository.GetLineItemsByCartId(cartId);
            var shows = new List<ShowLineItem>();
            var subscriptions = new List<SubscriptionLineItem>();
            // 3. use LineItemTypeId and ProductIds to get Show and Subscription LineItems
            foreach (LineItem item in lineItems) // Loop through List with foreach
            {
                if (item.LineItemType == "Show")
                {
                    //Push Quantity and and LineItemId to LineItem Class
                    ShowLineItem show = _lineItemRepository.GetShowLineItems(item.ProductId);
                    shows.Add(show);
                }
                else if (item.LineItemType == "Subscription")
                {
                    SubscriptionLineItem subscription = _lineItemRepository.GetSubscriptionLineItem(item.ProductId);
                    subscriptions.Add(subscription);
                }
            }
            //4. Put it all in the Cart class
            var cart = Cart.BuildCart(uid, cartId, shows, subscriptions);

            return Ok(cart);
        }
    }
}

