using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
 public class UserAndFileData {

    [Required]
    public object fill {
        get => UAF.fill; set => UAF.fill = value;
    }
    [Required]
    public object filldata {
        get => UAF.filldata; set => UAF.filldata = value;
    }

    public UserAndFile UAF { get; set; } = new UserAndFile();
    }
}