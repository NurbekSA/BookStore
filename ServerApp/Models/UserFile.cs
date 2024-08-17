using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
namespace ServerApp.Models{
    public class UserFile{
        public long UserFileId{ get; set; }
        public long UsId{get; set;}
        public string Task{ get; set; }
        public string Language{ get; set; }
        public string url{ get; set; }
        public string? Univer{ get; set; }
        public int? Curs{ get; set; }
        public string? Facultet{ get; set; }
        public string? Spetsialnots{get; set;}
        public string? Ticher{ get; set; }
    }
}
