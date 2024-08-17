using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
 public class FileData {
    [Required]
    public long UsId {
        get => user.UsId; set => user.UsId = value;
    }
    [Required]
    public string Task {
        get => user.Task; set => user.Task = value;
    }
    [Required]
    public string Language {
        get => user.Language; set => user.Language = value;
    }    [Required]
    public string url {
        get => user.url; set => user.url = value;
    }
    public UserFile user { get; set; } = new UserFile();
    }
}