using System.Collections;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Souqly_API.Models
{
    public class User : IdentityUser<int>
    {
        // Marketing Info

        // Shipping Info

        // Supplier Info
       public string FirstName { get; set; }

        public string ImageID { get; set; } // صوره الرقم القومي
        // Shahy Asks ?????
        // P.P 
        // Last Name 
        // Why Total profits here 
        public int? TotalProfits { get; set; }
       public virtual ICollection<Product> Products { get; set; }
         public virtual ICollection<Order> Orders { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }

     //   public ICollection<Order> Orders { get; set; }
         // Many To Many
      //  public virtual ICollection<MarketingProduct> MarketingProducts { get; set; }
        public virtual ICollection<UserBill> UserBills { get; set; }
    }
}
