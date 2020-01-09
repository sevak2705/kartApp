using System.Collections.Generic;
using System.Threading.Tasks;
using kartApp.API.Model;
using Microsoft.EntityFrameworkCore;

namespace kartApp.API.Repository
{
    public class ProjectRespository : IProjectRespository
    {
        public DataContext _context ;
        public ProjectRespository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
             _context.Add(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<Project> GetProject(int id)
        {           
          var project = await _context.Projects.FirstOrDefaultAsync(b =>b.Id == id);
           return project;
        }
        public async Task<IEnumerable<Project>> GetProjects()
        {
            var projects = await _context.Projects.ToListAsync();
            return projects;
        }
        public async Task<bool> SaveAll()
        {
             return await _context.SaveChangesAsync() > 0;
        }
    }
}