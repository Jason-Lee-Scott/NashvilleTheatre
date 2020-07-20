using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;
using NashvilleTheatre.Models;

namespace NashvilleTheatre.Controllers
{
    [Route("api/lineitem")]
    public class LineItemController : ControllerBase
    {

        LineItemRepository _lineItemRepository;
        public LineItemController(LineItemRepository repository)
        {
            _lineItemRepository = repository;
        }

        // GET: api/lineitem/cart/{id}
        [HttpGet("cart/{id}")]
        public IActionResult GetLineItemsByCartId(int id)
        {
            var lineItems = _lineItemRepository.GetLineItemsByCartId(id);

            return Ok(lineItems);
            
        }

        // GET: api/lineitem/shows/cart/{id}
        [HttpGet("shows/cart/{id}")]
        public IActionResult GetShowLineItemsByCartId(int id)
        {
            var lineItems = _lineItemRepository.GetLineItemsByCartId(id);
            var shows = new List<ShowLineItem>();
            foreach (LineItem item in lineItems)
            {
                if (item.LineItemType == "Show")
                {
                    ShowLineItem show = _lineItemRepository.GetShowLineItems(item.ProductId);
                    shows.Add(show);
                }
            }
            return Ok(shows);

        }

        // GET: api/lineitem/subscriptions/cart/{id}
        [HttpGet("subscriptions/cart/{id}")]
        public IActionResult GetSubscriptionLineItem(int id)
        {
            var lineItems = _lineItemRepository.GetLineItemsByCartId(id);
            var subscriptions = new List<SubscriptionLineItem>();

            foreach (LineItem item in lineItems)
            {
                if (item.LineItemType == "Subscription")
                {
                    SubscriptionLineItem subscription = _lineItemRepository.GetSubscriptionLineItem(item.ProductId);
                    subscriptions.Add(subscription);
                }
            }

            return Ok(subscriptions);
        }

    }
}
