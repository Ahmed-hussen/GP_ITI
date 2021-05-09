using System.Threading.Tasks;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    
    public interface ISouqlyRepo
    {

      void Add <T> (T entity) where T:class;// Add Any entity
      void Delete <T> (T entity) where T:class;
       void Update <T> (T entity) where T:class;
      Task <bool> SaveAll();

    //Cart
         Task <User> GetUser(int id);
         Task<bool> IsMarketHaveCart(int id);
         Task<int> GetCartID(int id);
         Task<bool> IsOptionExist(int id);
         Task <ProductOptionCart> GetOption(int optionId , int cartId);
         Task<int> GetStock(int optionId);
        Task<ProductOptionCart> GetCart(int id);
        Task<float> GetProductPrice(int cartID);
    }
}