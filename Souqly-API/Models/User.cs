using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Souqly_API.Models
{
 public class User:IdentityUser<int>
    {
        // Marketing Info

        // Shipping Info

        // Supplier Info
        public string FirstName { get; set; }
        public string ImageID { get; set; } // صوره الرقم القومي
        public int? TotalProfits { get; set; }
        public ICollection<Product> Products { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
        public ICollection<Order> Orders { get; set; }
         // Many To Many
        public virtual ICollection<MarketingProduct> MarketingProducts { get; set; }


    }
}