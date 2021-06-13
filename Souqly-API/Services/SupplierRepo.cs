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

        public async Task<List<SupplierOrderDto>> GetOrders(long supplierId)
        {

            var orders = await _context.OrderDetails.Include(i => i.Order).
                                           Include(i => i.Option).ThenInclude( o => o.Product).Select(o => new SupplierOrderDto()
                                           {
                                               OrderId = o.OrderId,
                                               OrderDate = o.Order.OrderDate,
                                               ProductId = o.Option.ProductId,
                                               ProductName = o.Option.Product.ProductName,
                                               Quantity = o.Quantity,
                                               Status = o.Order.Status,
                                               TotalOptionPrice = o.TotalOptionPrice
                                           }).ToListAsync();
            return orders;
        }
        
    }
}
