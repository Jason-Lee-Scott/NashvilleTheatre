using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;

namespace NashvilleTheatre.Controllers
{
    [Route("api/theatre")]
    [ApiController]
    public class TheatreCoController : ControllerBase
    {
        TheatreCoRepository _theatreCoRepository;
        public TheatreCoController(TheatreCoRepository repository)
        {
            _theatreCoRepository = repository;
        }
        [HttpGet]
        public IActionResult GetAllTheatreCompanies()
        {
            var companies = _theatreCoRepository.GetAllTheatreCompanies();

            if (!companies.Any())
            {
                return NotFound("Theatre is dead. There are no theatre troupes. Alas. 'twould appear that the world is no longer a stage.");
            }
            return Ok(companies);
        }

        [HttpGet("{theatreCompanyId}")]
        public IActionResult GetTheatreCoById(int theatreCompanyId)
        {
            var theatreCoById = _theatreCoRepository.GetTheatreCoById(theatreCompanyId);

            if (!theatreCoById.Any())
            {
                return NotFound("There doesn't appear to be any Theatre Company with that specific ID in our system.");
            }
            return Ok(theatreCoById);
        }

        [HttpGet("{theatreCompanyId}/orderswithcustomers")]
        public IActionResult GetTheatreCoOrdersByTheatreCoId(int theatreCompanyId)
        {
            var theatreById = _theatreCoRepository.GetTheatreCoOrdersWithCustomerInfoById(theatreCompanyId);

            if (!theatreById.Any())
            {
                return NotFound("There doesn't appear to be any Theatre Company with that specific ID in our system.");
            }
            return Ok(theatreById);
        }

        [HttpGet("{theatreCompanyId}/orders")]
        public IActionResult GetAllTheatreCoOrdersById(int theatreCompanyId)
        {
            var theatreOrders = _theatreCoRepository.GetAllTheatreCoOrdersById(theatreCompanyId);

            if (!theatreOrders.Any())
            {
                return NotFound("There doesn't appear to be any Theatre Company with that specific ID in our system.");
            }
            return Ok(theatreOrders);

        }

        [HttpGet("{theatreCoId}/orders/currentmonth")]
        public IActionResult GetAllTheatreCoOrdersThisMonth(int theatreCoId)
        {
            var theatreOrders = _theatreCoRepository.GetAllTheatreCoOrdersThisMonth(theatreCoId);

            if (!theatreOrders.Any())
            {
                return NotFound("There doesn't appear to be any Theatre Company with that specific ID in our system.");
            }
            return Ok(theatreOrders);
        }

        [HttpGet("{theatreCoId}/totalcreditsbymo")]
        public IActionResult GetAllTheatreCoTotalSalesByMonth(int theatreCoId)
        {
            var theatreOrders = _theatreCoRepository.GetAllTheatreCoTotalSalesByMonth(theatreCoId);

            if (!theatreOrders.Any())
            {
                return NotFound("There doesn't appear to be any Theatre Company with that specific ID in our system.");
            }
            return Ok(theatreOrders);
        }
    }
}