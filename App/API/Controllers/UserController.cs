using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using API.RequestModel;
using SmaranAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.ResponseModels;

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

        // GET api/<UserController>/abc@xyz.com
        [Authorize]
        [HttpGet("{email}")]
        public User GetByEmail(string email)
        {
            return _userService.GetByEmail(email);
        }

        // GET api/<UserController>/5
        [Authorize]
        [HttpGet("{id}")]
        public User GetById(int id)
        {
            return _userService.GetById(id);
        }

        // GET api/<UserController>/5/Notifications
        [Authorize]
        [HttpGet("Notifications/{id}")]
        public IEnumerable<NotificationResponse> GetUserNotifications(int id)
        {
            return _userService.GetNotifications(id);
        }

        // POST api/<UserController>
        [HttpPost]
        public ResponseObject Post([FromBody] UserRequest userRequest)
        {
            return _userService.Add(userRequest);
        }

        // PUT api/<UserController>/5
        [HttpPut("UpdatePassword/{email}")]
        public ResponseObject Put(string email, [FromBody] UpdatePasswordRequest updatePasswordRequest)
        {
            updatePasswordRequest.Email = email;
            var data = _userService.UpdatePassword(updatePasswordRequest);
            if(data)
                return new ResponseObject() { Error = null };
            else
                return new ResponseObject() { Error = "error while authnticate and update user" };
        }
    }
}
