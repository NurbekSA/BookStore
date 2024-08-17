using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models
{
    public class Esep{
    public long EsepId{ get; set; }
    public long UsId{ get; set; }
    public string Task{ get; set; }
    public int Cost{ get; set; }
    public string Language{ get; set; }
    public int Curs{ get; set; }
    public DateTime Time{get; set;}
}
}
