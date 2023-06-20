using Microsoft.EntityFrameworkCore;
namespace poc.api.Models{
[Keyless]
public class TeamboardData

{
        
     public string username { get; set; }

    public string teamname { get; set; }

    public decimal strategy1_approvedrate { get; set; }

    public decimal strategy1_badrate { get; set; }

    public int strategy1_population { get; set; }

    public decimal strategy2_approvedrate { get; set; }

    public decimal strategy2_badrate { get; set; }

    public int strategy2_population { get; set; }

    public decimal strategy3_approvedrate { get; set; }

    public decimal strategy3_badrate { get; set; }

    public int strategy3_population { get; set; }
        // public string password{ get; set;}



       

}
}