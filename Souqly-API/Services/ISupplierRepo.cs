using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Souqly_API.Models;
using Souqly_API.Dtos.Supplier;

namespace Souqly_API.Services
{
   
    public interface ISupplierRepo
    {
         Task<List<SupplierOrderDto>> GetOrders(long supplierId);
    }
}
