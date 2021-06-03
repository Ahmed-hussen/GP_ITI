using Microsoft.EntityFrameworkCore;
using Souqly_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public class ProductRepo:IProductRepo
    {
        private readonly DataContext _context;

        public ProductRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<List<Product>> GetProducts()
        {
            return await _context.Products.Include(p => p.Images).ToListAsync();

        }

        public async Task<Product> GetProductById(int id)
        {
            return await _context.Products.Include(p => p.Options).Include(p => p.Images).FirstOrDefaultAsync(p => p.Id == id);
        }

      
    }
}
