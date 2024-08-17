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
    [Route("api/submitTask")]
    [ApiController]
    public class SubmitTask : Controller
    {
        private DataContext context;
        public SubmitTask(DataContext ctx)
        {
            context = ctx;
        }
       [HttpPost]
        public IActionResult CreateTask([FromBody] EsepData pdata)
        {
            if (ModelState.IsValid)
            {
                Esep p = pdata.esep;
                context.Add(p);
                context.SaveChanges();
                Console.WriteLine(p.Curs);
                Console.WriteLine(p.Language);
                Console.WriteLine(p.Task);
                Console.WriteLine(p.Cost);
                return Ok();
            }
            else
            {
                return BadRequest(ModelState);;
            }
        }
        


    }
}