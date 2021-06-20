//using Microsoft.EntityFrameworkCore;
using Souqly_API.Dtos.Products;
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

        public async Task DeleteProduct(int id)
        {
            Product product = await _context.Products.FirstOrDefaultAsync(a => a.Id == id);

             _context.Products.Remove(product);
             await _context.SaveChangesAsync();

        }

        public async Task<List<ProductDto>> GetProducts()
        {

            List<ProductDto> result = await  _context.Products.Include(p => p.Options).Include(p => p.Images).Select(p => new ProductDto()
                                     {
                                          id = p.Id,
                                          productName = p.ProductName,
                                          price = p.Options.Min(o => o.ItemPrice),
                                          stockIn = p.Options.Sum(o => o.StockIn),
                                          images = p.Images.Select(i => i.Url).ToList(),
                                          options = p.Options.Select(o => new OptionDto() { 
                                              Id = o.Id, Name = o.AvailableOptions, ItemPrice = o.ItemPrice, StockIn = o.StockIn
                                          }).ToList()
                                     }).ToListAsync();
            return result ;

        }

    }
}