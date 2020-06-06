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

        [HttpGet("company/{theatreCompanyId}")]
        public IActionResult GetTheatreCoById(int theatreCompanyId)
        {
            var theatreCoById = _showRepository.GetTheatreCoById(theatreCompanyId);
            return Ok(theatreCoById);
        }

        [HttpGet("company/{theatreCompanyId}/shows")]
        public IActionResult GetShowsByTheatreCo(int theatreCompanyId)
        {
            var showsByCompany = _showRepository.GetShowsByTheatreCo(theatreCompanyId);
            return Ok(showsByCompany);
        }
    }
}
