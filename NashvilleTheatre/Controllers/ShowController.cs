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

        ShowRepository _repository = new ShowRepository();

        //ShowRepository _repository;

        //public ShowController(ShowRepository repository)
        //{
        //    _repository = repository;
        //}

        // GET: api/Show
        [HttpGet]
        public IActionResult GetAllShows()
        {
            var shows = _repository.GetAllShows();

            if (!shows.Any())
            {
                return NotFound();
            }
            return Ok(shows);
        }

        [HttpGet("companies")]
        public IActionResult GetAllTheatreCompanies()
        {
            var companies = _repository.GetAllTheatreCompanies();

            if (!companies.Any())
            {
                return NotFound();
            }
            return Ok(companies);
        }
    }
}
