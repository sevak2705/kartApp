using System.Threading.Tasks;
using kartApp.API.Model;

namespace kartApp.API.Repository
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);
         Task<User> Login(string userName, string password);
         Task<bool> IsUserExist(string userName);
    }
}