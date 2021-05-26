using Souqly_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Dtos.Supplier
{
    public class SupplierOrderDto
    {
        public int Id { get; set; }

        public DateTime OrderDate { get; set; }

        public Product Product { get; set; }

        public int Quantity { get; set; }

        public float TotalOptionPrice { get; set; }

        public string Status { get; set; }
    }
}
