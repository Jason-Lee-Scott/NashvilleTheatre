using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;

// write GET Call for list of all categories
namespace NashvilleTheatre.Controllers
{
    [Route("api/show")]
    [ApiController]
    public class ShowController : ControllerBase
    {
        ShowRepository _showRepository;

        public ShowController(ShowRepository repository)
        {
            _showRepository = repository;
        }

        [HttpGet]
        public IActionResult GetAllShows()
        {
            var shows = _showRepository.GetAllShows();

            if (!shows.Any())
            {
                return NotFound("Better get some waiters rehearsing 'cuz there's no shows");
            }
            return Ok(shows);
        }

        [HttpGet("company/{theatreCompanyId}/shows")]
        public IActionResult GetShowsByTheatreCo(int theatreCompanyId)
        {
            var showsByCompany = _showRepository.GetShowsByTheatreCo(theatreCompanyId);
            if (!showsByCompany.Any())
            {
                return NotFound("This theatre troupe doesn't appear to have hosted any shows yet.");
            }
            
            return Ok(showsByCompany);
        }
        
        [HttpGet("{ShowId}")]
        public IActionResult GetShowByShowId(int showId)
        {
            var show = _showRepository.GetShowById(showId);

            if (show == null)
            {
                return NotFound("No show with that Id could be found.");
            }
            else
            {
                return Ok(show);
            }
        }
    }
}
