using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using System.Linq;
namespace ServerApp.Controllers {
 public class HomeController : Controller {
   private DataContext context;
   public HomeController(DataContext repo) {
      context = repo;
   }
   public IActionResult Index() {
      return View(context.Users);
   }
   
   }
}