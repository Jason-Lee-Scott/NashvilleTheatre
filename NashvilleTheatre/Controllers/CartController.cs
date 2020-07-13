using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NashvilleTheatre.DataAccess;

namespace NashvilleTheatre.Controllers
{
    [Route("api/cart")]
    public class CartController : Controller
    {
        CartRepository _cartRepository;
        private readonly UserRepository _userRepository;

        public CartController(CartRepository repository, UserRepository userRepository)
        {
            _cartRepository = repository;
            _userRepository = userRepository;
        }
        // GET: api/cart/{uid}
        [HttpGet("{uid}")]
        public IActionResult GetUserCart(int uid)
        {
            var cart = _cartRepository.GetUsersCart(uid);

            return Ok(cart);
        }

    }
}
