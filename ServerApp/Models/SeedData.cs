using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ServerApp.Models;
namespace ServerApp {
 public class SeedData {
 public static void SeedDatabase(DataContext context) {
 context.Database.Migrate();
 if(context.Users.Count() == 0){
    var users = new List<User>{
        new User{Name = "Nurbek", login = "1111", pass = "1111", vbaks = 0, mb = 200, file = null, esep = null, message = null}
    };
    context.Users.AddRange(users);
    context.SaveChanges();
 }
//  if(context.Users.Count() == 0){
//     var US = new User{Name = "Nurbek", login = "1111", pass = "1111", vbaks = 0, mb = 200, file = null, esep = null, message = null};
//     context.Add(US);
//     context.SaveChanges();
//  }
   
}
}
}