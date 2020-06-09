﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using NashvilleTheatre.DataAccess;

namespace NashvilleTheatre.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        OrderRepository _orderRepository;
        public OrderController(OrderRepository repository)
        {
            _orderRepository = repository;
        }

        // GET: api/Order
        // assume api/order is talking about shows unless subscriptions is specified
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
    }
}
