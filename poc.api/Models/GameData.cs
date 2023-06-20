using Microsoft.EntityFrameworkCore;
namespace poc.api.Models{
[Keyless]
public class GameData

{
        
    public decimal Approvedrate { get; set; }
    public decimal Badrate { get; set; }
    public int Population { get; set; }
        // public string password{ get; set;}



       

}
}