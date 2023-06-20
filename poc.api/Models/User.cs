using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace poc.api.Models{

    public class User

    {
        [Key]
        public string username{ get; set;}

        public string password{ get; set;}

        public string role{ get; set;}

        public string teamname{ get; set;}
       

    }
}