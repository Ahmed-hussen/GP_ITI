using System.Threading.Tasks;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public interface ISouqlyRepo
    {
         Task <User> GetUser(int id);
    }
}