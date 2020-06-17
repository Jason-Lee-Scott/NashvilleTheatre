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

        // GET: api/user/{uid}
        [HttpGet("{uid}")]
        public IActionResult GetUserWithUid(int uid)
        {
            var user = _userRepository.GetUserByUid(uid);

            return Ok(user);
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

        // api/user/allusers
        [HttpGet("allusers")]
        public IActionResult GetAllUsers()
        {
            var showAllUsers = _userRepository.GetAllUsers();
            if (!showAllUsers.Any())
            {
                return NotFound(
                    "Looks like there aren't any users yet. Better reseed your database or get a new marketing team.");
            }
            
            return Ok(showAllUsers);
        }

        // api/user/{userId}/deleteuser
        [HttpPut("{userId}/deleteuser")]
        public IActionResult DeleteUserByUid(int userId)
        {

        }
    }
}
