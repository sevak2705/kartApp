using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using kartApp.API.Dto;
using kartApp.API.Model;
using kartApp.API.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using udApp.API.Dtos;

namespace kartApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthRepository _repo;
        private IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config)
        {
            _repo = repo;
            _config = config;
        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto obj)
        {
            //is username unique
            if (await _repo.IsUserExist(obj.UserName.ToLower()))
            {
                return BadRequest("User already exist");
            }
            var userToCreate = new User
            {
                UserName = obj.UserName,
                FirstName = obj.FirstName,
                LastName = obj.LastName
            };
            var createdUser = await _repo.Register(userToCreate, obj.Password);
            return StatusCode(201);
        }
       [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLoginDto obj)
        {
            var userFromRepo = await _repo.Login(obj.UserName.ToLower(), obj.Password);
            if (userFromRepo == null)
                return Unauthorized();
            var claim = new[]{
            new Claim(ClaimTypes.NameIdentifier,userFromRepo.Id.ToString()),
            new Claim(ClaimTypes.Name, userFromRepo.FirstName + ' ' + userFromRepo.LastName),
         };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);
            var tokenDesc = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claim),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = cred,
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateJwtSecurityToken(tokenDesc);
            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });
        }

    }
}
