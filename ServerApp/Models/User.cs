using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models
{
    public class User{
    public long UserId{ get; set; }
    public string Name{ get; set; }
    public string login{ get; set; }
    public string pass{ get; set; }
    public int vbaks{ get; set; }
    public int mb{ get; set; }
    public List<UserFile>? file{ get; set; }
    public List<Esep>? esep;
    public List<Message>? message;


}    
}
