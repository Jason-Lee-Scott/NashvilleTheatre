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
    }
}