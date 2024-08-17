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
    [Route("api/file")]
    [ApiController]
    public class FileController : Controller
    {
        private DataContext context;
        public FileController(DataContext ctx)
        {
            context = ctx;
        }

         [HttpPost]
        public async Task<IActionResult> Upload([FromBody] UserAndFileData obj)
        {
             Console.WriteLine("safkjlansdfkjnsadlnsadkj");
            IFormFile file = (IFormFile)obj.UAF.fill;
             Console.WriteLine("safkjlansdfkjnsadlnsadkj");
            if (file == null || file.Length == 0)
                return BadRequest("File is not selected");

            string str = @"C:\Users\Pc\Desktop";
            string path = Path.Combine(str, file.FileName);
            using (var stream = new FileStream(path, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok();
        }
    }
}