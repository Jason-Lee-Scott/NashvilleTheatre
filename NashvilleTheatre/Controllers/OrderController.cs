using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Dapper;
using NashvilleTheatre.DataAccess;
using NashvilleTheatre.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


// add GET call for single order by ID
// Talk with instructors about Orders and order data setup

namespace NashvilleTheatre.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        OrderRepository _orderRepository;
        private readonly UserRepository _userRepository;

        public OrderController(OrderRepository repository, UserRepository userRepository)
        {
            _orderRepository = repository;
            _userRepository = userRepository;
        }


        // GET: api/order/subscriptions
        [HttpGet("subscriptions")]
        public IActionResult GetSubscriptionOrders()
        {
            var subscriptions = _orderRepository.GetSubscriptionOrders();
            if (subscriptions.Count < 1)
            {
                return NotFound("Sorry, there are no subscriptions.");
            }
            return Ok(subscriptions);
        }

        [HttpGet("{userId}")]
        public IActionResult GetOrdersByUserId(int userId)
        {
            var shows = _orderRepository.GetOrdersByUserId(userId);
            if (shows.Count < 1)
            {
                return NotFound("This user has not purchased any tickets.");
            }
            return Ok(shows);
        }

        //POST: api/order/subscription/{uid}/{subId}
        [HttpPost("subscription/{uid}/{subId}")]
        public IActionResult SubscriptionOrder(int uid, int subId)
        {
            var userCheck = _userRepository.GetUserByUid(uid);
            var SubscriptionCheck = _orderRepository.CheckSubscriptionExistanceByUid(uid);
            var userExists = userCheck.Any();
            var SubscriptionExists = SubscriptionCheck.Any();

            if (!userExists)
            {
                return Forbid("User does not exist");
            }
            else if (userExists && SubscriptionExists)
            {
                return Forbid("User is already subscribed");
            }
            else if (userExists && !SubscriptionExists)
            {
                _orderRepository.CreateSubscriptionOrder(uid, subId);
                _userRepository.AddSubscriptionToUser(uid, subId);
                return Ok(_userRepository.GetUserByUid(uid)) ;
            }
            return Forbid("Something went wrong");
        }

        //GET: api/order/showOrder/1
        [HttpGet("showorder/{orderId}")]
        public IActionResult ShowOrdersByOrderId(int orderId)
        {
            var showOrder = _orderRepository.GetShowOrderByOrderId(orderId);
            if (!showOrder.Any())
            {
                return NotFound("There doesn't appear to be any show order with that specific ID in our system.");
            }
            return Ok(showOrder);
        }

        // GET: api/order/subscriptionorder/1
        [HttpGet("subscriptionorder/{orderId}")]
        public IActionResult SubcriptionOrderByOrderId(int orderId)
        {
            var subscriptionOrder = _orderRepository.GetSubscriptionOrderBySubscriptionOrderId(orderId);
            if (!subscriptionOrder.Any())
            {
                return NotFound("There doesn't appear to be any subscription order with that specific ID in our system.");
            }
            return Ok(subscriptionOrder);
        }


    }
}
