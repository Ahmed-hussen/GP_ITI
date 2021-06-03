using Souqly_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Services
{
    public interface IProductRepo
    {
        Task<List<Product>> GetProducts();
        Task<Product> GetProductById(int id);

    }
}
