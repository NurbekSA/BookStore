using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models
{
    public class Message{
        public long MessageId{ get; set; }
        public long SenderId{ get; set; }
        public string messag{ get; set; }
    }
}
