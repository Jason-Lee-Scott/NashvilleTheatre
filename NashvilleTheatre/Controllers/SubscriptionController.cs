using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;

namespace NashvilleTheatre.Controllers
{
    [Route("api/subscription")]
    [ApiController]
    public class SubscriptionController : ControllerBase
    {
        SubscriptionRepository _subscriptionRepository;

        public SubscriptionController(SubscriptionRepository repository)
        {
            _subscriptionRepository = repository;
        }

        [HttpGet]
        public IActionResult AllSubscriptions()
        {
            var subscriptions = _subscriptionRepository.AllSubscriptions();
            return Ok(subscriptions);
        }

        [HttpGet("usertypeid/{userTypeId}")]
        public IActionResult AllSubscriptionsByUserTypeId(int userTypeId)
        {
            var subscriptions = _subscriptionRepository.AllSubscriptionsByUserTypeId(userTypeId);
            return Ok(subscriptions);
        }
    }
}