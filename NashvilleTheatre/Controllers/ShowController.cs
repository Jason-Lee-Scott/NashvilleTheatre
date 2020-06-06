using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using NashvilleTheatre.Models;
using NashvilleTheatre.DataAccess;

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

        // GET: api/Show
        [HttpGet]
        public IActionResult GetAllShows()
        {
            var shows = _showRepository.GetAllShows();

            if (!shows.Any())
            {
                return NotFound();
            }
            return Ok(shows);
        }

        [HttpGet("companies")]
        public IActionResult GetAllTheatreCompanies()
        {
            var companies = _showRepository.GetAllTheatreCompanies();

            if (!companies.Any())
            {
                return NotFound();
            }
            return Ok(companies);
        }

        [HttpGet("{category}")]
        public IActionResult GetSummaryByCategory(string category)
        {
            var summary = _showRepository.GetSummaryByCategory(category);
            return Ok(summary);
        }

        //api/Shows/3
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
