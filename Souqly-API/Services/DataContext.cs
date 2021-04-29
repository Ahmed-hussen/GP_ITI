using E_Commerce.API.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Souqly_API.Models;

namespace Souqly_API.Services
{
    public class DataContext : IdentityDbContext<User, Role, int>
    {
        // 
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }


    
        public DbSet<Product> Products { get; set; }
        public DbSet<Image> Images4 { get; set; }
        public DbSet<MarketingProduct> MarketingProducts { get; set; }
        public DbSet<Bill> Bills { get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<OrderDetail> OrderDetails { get; set; }
        public DbSet<ProductImage> ProductImages { get; set; }
        public DbSet<Shipping> Shippings { get; set; }




    }
}