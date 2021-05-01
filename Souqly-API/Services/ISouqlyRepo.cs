using System.Threading.Tasks;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    
    public interface ISouqlyRepo
    {

      void Add <T> (T entity) where T:class;// Add Any entity
      void Delete <T> (T entity) where T:class;
      Task <bool> SaveAll();

    //Cart
         Task <User> GetUser(int id);
         Task<bool> MarketIsExist(int id);
    }
}