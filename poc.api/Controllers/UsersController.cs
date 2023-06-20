using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using poc.api.Data;
using poc.api.Models;
using System.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;

namespace poc.api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public static UserData userdata = new UserData();
        //public static GameData gamedata = new GameData();
        public static Admin auserdata = new Admin();
        private readonly PocDbContext _PocDbContext;
        private readonly IConfiguration _configuration;
        private readonly ILogger<UsersController> _logger;

    
        public UsersController(PocDbContext PocDbContext,IConfiguration configuration,ILogger<UsersController> logger)
        {
              _configuration = configuration;
              _PocDbContext = PocDbContext;
              _logger = logger;
              _logger.LogInformation("Application Starts executing...");

        }

        //[HttpPost]
        [HttpPost]
        public async Task<IActionResult> AddEmployees( [FromBody] User emprequest)

        {
            CreatePasswordHash(emprequest.password,out byte[] passwordHash, out byte[] passwordSalt);
            userdata.username = emprequest.username;
            userdata.teamname=emprequest.teamname;
            userdata.role="Associates";
            userdata.PasswordHash = passwordHash;
            userdata.PasswordSalt = passwordSalt;
            if(emprequest.role=="Admin"){
                auserdata.username = emprequest.username;
                auserdata.password=emprequest.password;
                auserdata.role=emprequest.role;
                await _PocDbContext.Admin.AddAsync(auserdata);
            }
            await _PocDbContext.UserData.AddAsync(userdata);

            await _PocDbContext.SaveChangesAsync();

            return Ok(userdata);

        }
        [HttpGet("login")]
        public async Task<ActionResult<string>> Login(string uname, string pwd)
        {
             var loginuser=await _PocDbContext.UserData.FirstOrDefaultAsync(x=>x.username==uname);
            if (loginuser == null)
            {
                 
                return "not found.";

            }

            if (!VerifyPasswordHash(pwd, loginuser.PasswordHash, loginuser.PasswordSalt))
            {
                return "Wrong Password";
            }
             string token = CreateToken(loginuser);
             return Ok(token);

            //string token =CreateToken(loginuser);
        }
        [HttpGet("gamedata"),Authorize]
        public async Task<IActionResult> fetchGameData()
        {
            var datas=await _PocDbContext.GameData.ToListAsync();
            if (datas == null)
            {
                 
                return NotFound();

            }
            
            return Ok(datas);
        }
        [HttpGet("teamboarddata"),Authorize]
        public async Task<IActionResult> fetchteamboardData()
        {
            var datas=await _PocDbContext.TeamboardData.ToListAsync();
            if (datas == null)
            {
                 
                return NotFound();

            }
            
            return Ok(datas);
        }
         private void CreatePasswordHash(string password,out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
           

        }
        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                return computedHash.SequenceEqual(passwordHash);

            }
        }
        private string CreateToken(UserData user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.username),
                new Claim(ClaimTypes.Role, user.role)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(
                _configuration.GetSection("AppSettings:Token").Value));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddDays(1),
                signingCredentials: creds);

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        }


    }

}