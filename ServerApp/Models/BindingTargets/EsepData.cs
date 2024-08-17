using System.ComponentModel.DataAnnotations;
namespace ServerApp.Models.BindingTargets {
 public class EsepData {

    [Required]
    public string Task {
        get => esep.Task; set => esep.Task = value;
    }
    [Required]
    public int Cost {
        get => esep.Cost; set => esep.Cost = value;
    }
    [Required]
    public string Language {
        get => esep.Language; set => esep.Language = value;
    }

    [Required]
    public int Curs {
        get => esep.Curs; set => esep.Curs = value;
    }
    [Required]
    public DateTime Time {
        get => esep.Time; set => esep.Time = value;
    }
    public Esep esep { get; set; } = new Esep();
    }
}