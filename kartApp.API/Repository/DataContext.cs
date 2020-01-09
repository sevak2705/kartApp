using kartApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace kartApp.API.Repository
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<User> Users { get; set; }
        public DbSet<kartApp.API.Model.Project> Projects { get; set; }
    }
}