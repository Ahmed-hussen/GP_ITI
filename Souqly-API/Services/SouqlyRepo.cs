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
    }
}