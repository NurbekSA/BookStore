using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ServerApp.Models.BindingTargets;
using Microsoft.AspNetCore.JsonPatch;
using System.Text.Json;
using System.Reflection;
using System.ComponentModel;
using Microsoft.Extensions.Configuration;

namespace ServerApp.Controllers
{
    [Route("api/user")]
    [ApiController]
    public class RouteController : Controller
    {
        private DataContext context;
        public RouteController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpGet]
        public User GetProduct(string log = "1", string pass = "1")
        {
            User result = context.Users.Where(p => p.login == log).FirstOrDefault(p => p.pass == pass);
             return result;
        }
       [HttpPost]
        public IActionResult CreateProduct([FromBody] UserData pdata)
        {
            if (ModelState.IsValid)
            {
                User p = pdata.user;
                context.Add(p);
                context.SaveChanges();
                return Ok(p);
            }
            else
            {
                return BadRequest(ModelState);;
            }
        }
        


    }
}