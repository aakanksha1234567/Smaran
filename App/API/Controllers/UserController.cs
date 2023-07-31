using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmaranAPI.Models;
using SmaranAPI.RequestModel;
using SmaranAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SmaranAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        // GET: api/<UserController>
        [Authorize]
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _userService.GetAll();
        }

        // POST api/<UserController>
        [HttpPost]
        public ResponseObject Post([FromBody] UserRequest userRequest)
        {
            return _userService.Add(userRequest);
        }

        // PUT api/<UserController>/5
        [HttpPut("UpdatePassword/{email}")]
        public bool Put(string email, [FromBody] UpdatePasswordRequest updatePasswordRequest)
        {
            updatePasswordRequest.Email = email;
            return _userService.UpdatePassword(updatePasswordRequest);
        }
    }
}
