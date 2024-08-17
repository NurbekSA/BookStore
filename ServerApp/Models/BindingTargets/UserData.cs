using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
 public class UserData {

    [Required]
    public string Name {
        get => user.Name; set => user.Name = value;
    }
    [Required]
    public string login {
        get => user.login; set => user.login = value;
    }
    [Required]
    public string pass {
        get => user.pass; set => user.pass = value;
    }
    [Required]
    public int vbaks {
        get => user.vbaks; set => user.vbaks = value;
    }
    [Required]
    public int mb {
        get => user.mb; set => user.mb = value;
    }
    public User user { get; set; } = new User();
    }
}