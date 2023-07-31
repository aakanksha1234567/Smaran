using API.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SmaranAPI.Services;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        #region Property
        readonly IUserService _userService;
        #endregion

        #region Constructor
        public LoginController(IUserService userService) {
            _userService = userService;
        }
        #endregion
        [HttpPost]
        public IActionResult Login([FromBody] Login user)
        {
            if (user is null)
            {
                return BadRequest("Invalid user request!!!");
            }

            var retVal = _userService.Authenticate(user.UserName, user.Password);
            if (retVal)
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Model.ConfigurationManager.AppSetting["JWT:Secret"]));
                var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
                var tokeOptions = new JwtSecurityToken(
                    issuer: Model.ConfigurationManager.AppSetting["JWT:ValidIssuer"],
                    audience: Model.ConfigurationManager.AppSetting["JWT:ValidAudience"],
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddMinutes(10),
                    signingCredentials: signinCredentials
                );
                var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
                return Ok(new JWTTokenResponse { AccessToken = tokenString, Error = "" });
            }
            return Unauthorized();
        }
    }
}
