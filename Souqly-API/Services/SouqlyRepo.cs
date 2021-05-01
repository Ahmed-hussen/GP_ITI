using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public class SouqlyRepo : ISouqlyRepo
    {
        private readonly DataContext _context;

        public SouqlyRepo(DataContext context)
        {
            _context = context;
        }
        public async Task<User> GetUser(int id)
        {
          var user=await _context.Users.FirstOrDefaultAsync(u=>u.Id==id);
            return user;
        }


         public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
 
        public void Delete<T>(T entity) where T : class
        {
           _context.Remove(entity);
        }

          public  async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync()>0;
        }

        public async Task<bool> MarketIsExist(int id)
        {
            if( await  _context.Carts.AnyAsync(i=>i.MarkitingId==id) ) return false;
            return true;
        }
    }
}