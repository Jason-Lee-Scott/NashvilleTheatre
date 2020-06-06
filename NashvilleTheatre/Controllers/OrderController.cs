using System;
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
        [HttpGet("subscriptions")]
        public IEnumerable<string> GetOrderSubscriptions()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("show")]
        public IEnumerable<string> GetOrderShows()
        {
            return new string[] { "value1", "value2" };
        }
    }
}
