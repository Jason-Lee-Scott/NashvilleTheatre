using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Dapper;
using NashvilleTheatre.DataAccess;
using NashvilleTheatre.Models;

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

        //// api/pickles
        //[HttpPost]
        //public IActionResult AddPickle(Pickle pickleToAdd)
        //{
        //    var existingPickle = _repository.GetByType(pickleToAdd.Type);
        //    if (existingPickle == null)
        //    {
        //        var newPickle = _repository.Add(pickleToAdd);
        //        return Created("", newPickle);
        //    }
        //    else
        //    {
        //        var updatedPickle = _repository.Update(pickleToAdd);
        //        return Ok(updatedPickle);
        //    }
        //}

        // api/users
        [HttpPost]
        public IActionResult AddNewUser(User userToAdd)
        {
            var existingUser = _userRepository.GetByUid(userToAdd);
            if (existingUser == null)
            {
                var newUser = _userRepository.Add(userToAdd);
                return Created("", newUser);
            }
            else
            {
                var updatedUser = _userRepository.Update(userToAdd);
            }
        }
    }
}
