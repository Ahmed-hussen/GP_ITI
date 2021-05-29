using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public class SupplierRepo : ISupplierRepo
    {
        
        private readonly DataContext _context;

        public SupplierRepo(DataContext context)
        {
            _context = context;
        }

        public async Task<List<OrderDetail>> GetOrders(long supplierId)
        {
            var orders = await _context.OrderDetails.Where(o => o.Product.UserId == supplierId).Include(s => s.Order).Include(s => s.Product).ToListAsync();
            return orders;
        }
        
    }
}
