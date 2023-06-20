using poc.api.Models;

using Microsoft.EntityFrameworkCore;

namespace poc.api.Data

{

    public class PocDbContext : DbContext

    {

        public PocDbContext(DbContextOptions options) : base(options)

        {

        }




        public DbSet<User> User { get; set; }
        public DbSet<UserData> UserData { get; set; }
        public DbSet<Admin> Admin{ get; set;}
        public DbSet<GameData> GameData{ get; set;}
        public DbSet<TeamboardData> TeamboardData{ get; set;}




    }

}