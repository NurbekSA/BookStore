using Microsoft.AspNetCore.Mvc;
using ServerApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ServerApp.Models.BindingTargets;
using Microsoft.AspNetCore.JsonPatch;
using System.Text.Json;
using System.Reflection;
using System.ComponentModel;
using System.Net;
using System.Net.Mail;

namespace ServerApp.Controllers
{
    [Route("api/mails")]
    [ApiController]
    public class MaillController : Controller
    {
        private DataContext context;
        public MaillController(DataContext ctx)
        {
            context = ctx;
        }
        [HttpPost]
        public IActionResult SendEmai([FromBody] EmailModel model)
        {
            // Вызов метода SendEmail
            Console.WriteLine("jfakjsnfkljnsadlcshb zxcln kjnjk");
            Console.WriteLine(model.Body + "1");
            Console.WriteLine( model.ToAddress + "2");
            Console.WriteLine( model.Subject + "3");
            var fromAddress = new MailAddress("suraubaev04@mail.ru", "SaveTime");
            var to = new MailAddress(model.ToAddress);
            var smtp = new SmtpClient
            {
                Host = "smtp.mail.ru",
                Port = 587,
                EnableSsl = true,
                DeliveryMethod = SmtpDeliveryMethod.Network,
                UseDefaultCredentials = false,
                Credentials = new NetworkCredential(fromAddress.Address, "65YMuLGmtGYmPy42NswD")
            };
            using (var message = new MailMessage(fromAddress, to)
            {
                Subject = model.Subject,
                Body = model.Body
            })
            {
                try
                {
                    smtp.Send(message);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            return Ok();
        }
    }  
   
        // [HttpGet]
        // public IEnumerable<Book> GetProducts(string category = " ", bool related = true)
        // {
        //     IQueryable<Book> query = context.Books;
        //     if (!string.IsNullOrWhiteSpace(category)) {
        //         string catLower = category.ToLower();
        //         query = query.Where(p => p.Category.ToLower().Contains(catLower));
        //     }
        //     if(query.Count() == 0){
        //         query = context.Books;
        //         query = query.Where(x => x.Name.ToLower().Contains(category.ToLower()));
        //     }
        //     if(category == " "){
        //         query = context.Books;
        //     }
        //     if (related)
        //     {
        //         query = query.Include(p => p.Supplier).Include(p => p.Ratings);
        //         List<Book> data = query.ToList();
        //         data.ForEach(p =>
        //         {
        //             if (p.Supplier != null)
        //             {
        //                 p.Supplier.Products = null;
        //             }
        //             if (p.Ratings != null)
        //             {
        //                 p.Ratings.ForEach(r => r.book = null);
        //             }
        //         });
        //         return data;
        //     }
        //     else
        //     {
        //         return query;
        //     }
        // }


        // [HttpPost]
        // public IActionResult CreateProduct([FromBody] ProductData pdata)
        // {
        //     if (ModelState.IsValid)
        //     {
        //         Book p = pdata.book;
        //         if (p.Supplier != null && p.Supplier.SupplierId != 0)
        //         {
        //             context.Attach(p.Supplier);
        //         }
        //         context.Add(p);
        //         context.SaveChanges();
        //         return Ok(p.BookId);
        //     }
        //     else
        //     {
        //         return BadRequest(ModelState);
        //     }
        // }

        // [HttpPut("{id}")]
        // public IActionResult ReplaceProduct(long id, [FromBody] ProductData pdata)
        // {
        //     // if (ModelState.IsValid)
        //     //{
        //         Book p = pdata.book;
        //         p.BookId = id;
        //         if (p.Supplier != null && p.Supplier.SupplierId != 0)
        //         {
        //             context.Attach(p.Supplier);
        //         }
        //         context.Update(p);
        //         context.SaveChanges();
        //         return Ok();
        //     // }
        //     // else
        //     // {
        //     //     return BadRequest(ModelState);
        //     // }
        // }

        // [HttpPatch("{id}")]
        // public IActionResult UpdateProduct(long id, [FromBody] JsonPatchDocument<ProductData> patch)
        // {
        //     Book book = context.Books
        //     .Include(p => p.Supplier)
        //    .First(p => p.BookId == id);
        //     ProductData pdata = new ProductData { book = book };
        //     patch.ApplyTo(pdata, ModelState);
        //     if (ModelState.IsValid && TryValidateModel(pdata))
        //     {
        //         if (book.Supplier != null && book.Supplier.SupplierId != 0)
        //         {
        //             context.Attach(book.Supplier);
        //         }
        //         context.SaveChanges();
        //         return Ok();
        //     }
        //     else
        //     {
        //         return BadRequest(ModelState);
        //     }
        // }

        // [HttpDelete("{id}")]
        // public void DeleteProduct(long id)
        // {
        //     context.Books.Remove(new Book { BookId = id });
        //     context.SaveChanges();
        // }
    
}