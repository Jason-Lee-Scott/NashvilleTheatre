using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using NashvilleTheatre.DataAccess;
using NashvilleTheatre.Models;
using NashvilleTheatre.Commands;

namespace NashvilleTheatre.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class UserController : ControllerBase
    {
        UserRepository _userRepository;
        public UserController(UserRepository repository)
        {
            _userRepository = repository;
        }


        // api/user/adduser
        [HttpPost("adduser")]
        public IActionResult AddNewUser(AddNewUserCommand newUser)
        {
            // validate email
            // confirm name isn't profanity

            var existingUser = _userRepository.GetIdByUserName(newUser.FirstName, newUser.LastName, newUser.Email);

            if (existingUser == null)
            {
                var createdUser = _userRepository.AddNewUser(newUser);

                return Created("", createdUser);
            }
            else
            {
                return BadRequest("User already exists.");
            }
        }

        // api/user/{userid}/shows/theatrecompany/{theatrecoId}
        [HttpGet("{userId}/shows/theatrecompany/{theatreCoId}")]
        public IActionResult UserOrdersByTheatreCo(int userId, int theatreCoId)
        {
            var showsByCo = _userRepository.UserOrdersByTheatreCo(userId, theatreCoId);
            if (!showsByCo.Any())
            {
                return NotFound("Looks like you haven't been to any shows by that troupe yet");
            }

            return Ok(showsByCo);
        }
    }
}
