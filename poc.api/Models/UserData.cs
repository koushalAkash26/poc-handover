using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace poc.api.Models{

    public class UserData

    {
        [Key]
        public string username{ get; set;}
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string teamname{ get; set;}
        public string role{ get; set;}
        // public string password{ get; set;}



       

    }
}