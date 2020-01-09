using System.Collections.Generic;
using System.Threading.Tasks;
using kartApp.API.Model;

namespace kartApp.API.Repository
{
    public interface IProjectRespository
    {
         //Add() of generic type T which expects T as input and T is only a class type
         void Add<T>(T entity) where T: class ;
         void Delete<T>(T entity) where T: class;
         Task<bool> SaveAll();
         Task<IEnumerable<Project>> GetProjects();
         Task<Project> GetProject(int id);
    }
}