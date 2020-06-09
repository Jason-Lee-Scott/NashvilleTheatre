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

namespace NashvilleTheatre.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        OrderRepository _orderRepository;
        private readonly UserRepository _userRepository;

        public OrderController(OrderRepository repository,UserRepository userRepository)
        {
            _orderRepository = repository;
            _userRepository = userRepository;
        }


        // GET: api/order/subscriptions
        [HttpGet("subscriptions")]
        public IActionResult GetSubscriptionOrders()
        public IActionResult GetAllOrderSubscriptions()
        {
            var subscriptions = _orderRepository.GetSubscriptionOrders();
            if (subscriptions.Count < 1)
            {
                return NotFound("Sorry, there are no subscriptions.");
            }
            return Ok(subscriptions);
            var allSubscriptions = _orderRepository.GetAllSubscriptionOrders();

            return Ok(allSubscriptions);
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

        [HttpGet("show")]
        public IEnumerable<string> GetOrderShows()
        {
            return new string[] { "value1", "value2" };
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
    }
}
