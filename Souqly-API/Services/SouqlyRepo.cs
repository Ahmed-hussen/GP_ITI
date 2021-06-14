using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Souqly_API.Models;
using Souqly_API.Dtos.User;

namespace Souqly_API.Services
{
    public class SouqlyRepo : ISouqlyRepo
    {
        private readonly DataContext _context; 

        public SouqlyRepo(DataContext context)
        {
            _context = context;
        }


        public async Task<IEnumerable<Shipping>> GetAllshipping()
        {
            var data=await _context.Shippings.ToListAsync();
            return data;
        }

        public async Task<User> GetUser(int id)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
            return user;
        }


        public async Task Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }


        public async Task  Delete <T>(T entity) where T : class
        {
            _context.Remove(entity);
           await   _context.SaveChangesAsync();
        }

        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }

        public async Task<bool> SaveAll()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> IsMarketHaveCart(int id)
        {
            if (await _context.Carts.AnyAsync(i => i.MarketingId == id)) return true;
            return false;
        }

        public async Task<int> GetCartID(int id)//id= Markting_id
        {
            var cartID = await _context.Carts.FirstOrDefaultAsync(i => i.MarketingId == id);
            return cartID.Id;
        }


        public async Task<bool> IsOptionExist(int id)
        {
            if (await _context.ProductOptionCart.AnyAsync(i => i.OptionId == id)) return true;
            return false;
        }

        public async Task<ProductOptionCart> GetOption(int optionId, int cartId)
        {
            var ProductOptionInCart = await _context.ProductOptionCart.Include(i=>i.Option).FirstOrDefaultAsync(i => i.OptionId == optionId && i.CartId == cartId);
            return ProductOptionInCart;

        }

        public async Task<int> GetStock(int optionId)
        {
            var Option = await _context.Option.FirstOrDefaultAsync(i => i.Id == optionId);

            return Option.StockIn;
        }

        public Task<List<ProductOptionCart>> GetCart(int id)
        {
            var CartItems = _context.ProductOptionCart.Include(i => i.Option).Where(i => i.CartId == id).ToListAsync();
            return CartItems;

        }

        // public float GetProductPrice(int cartID)
        // {
        //     float TotalPrice= _context.ProductOptionCart.Where(p => p.CartId == cartID).Select(p => p.NewPrice).Sum();

        //     return  TotalPrice;
        // }



        public async Task<float> GetProductPrice(int cartID)
        {

            //  var d = await db.Employee.Where(x => x.FirstName == "Jack").ToListAsync();

            var TotalPrice = await _context.ProductOptionCart.Where(p => p.CartId == cartID)
                .Select(p => p.NewPrice)
                .ToListAsync();
            float Total = 0;
            foreach (var item in TotalPrice)
            {
                Total += item; // instead of =+
            }

            return Total;

        }

        public async Task<float> GetShippingPrice(int shippingId)
        {
            var Shipping = await _context.Shippings.FirstOrDefaultAsync(i => i.Id == shippingId);

            return Shipping.price;
        }

        public async Task<List<int>> GetOptionsIds(int CartId)
        {

            var OptionIds = await _context.ProductOptionCart.Where(i => i.CartId == CartId)
            .Select(i => i.OptionId)
            .ToListAsync();

            return OptionIds;
        }


        public async Task<ProductOptionCart> GetProductOption(int optionId, int cartId)
        {
            var ProductOptionInCart = await _context.ProductOptionCart.Include(i => i.Option).ThenInclude(i => i.Product).FirstOrDefaultAsync(i => i.OptionId == optionId && i.CartId == cartId);
            return ProductOptionInCart;

        }

        public async Task<float> GetOptionPrice(int optionId)
        {
          var Option=await _context.Option.FirstOrDefaultAsync(i=>i.Id==optionId);
         var price= Option.ItemPrice;
          return price;
        }

        public async Task<Shipping> GetShipping(int id)
        {
            var ship=await _context.Shippings.FirstOrDefaultAsync(i=>i.Id==id);
            return ship;
        }


       public async Task<Order> GetOrderInfoById(int id,int marketingId)
        {
            var order=await  _context.Orders.Include(i=>i.Bill).Include(i=>i.Shipping)
                .Include(i=>i.OrderDetails).ThenInclude(i=>i.Option).ThenInclude(i=>i.Product)
                .ThenInclude(i=>i.Images)
                .FirstOrDefaultAsync(i=>i.Id==id && i.MarketingId == marketingId);
            return order;
        }
        public async Task<IEnumerable<Order>> GetAllOrders(int id)
        {
            var order= await  _context.Orders.Include(i=>i.Bill).Where(i=>i.MarketingId==id).OrderBy(i=>i.OrderDate).ToListAsync();
            return order;
        }


        //function to return user profits data
        public async Task<UserProfitsDto> GetUserProfits(int user_id)
        {
            var result =  _context.Users.Include(u => u.UserBills).FirstOrDefault(u => u.Id == user_id);
            return new UserProfitsDto()
            {
                TotalProfits = (int)result.TotalProfits,
                AvailableProfits = (int)(result.TotalProfits-result.WithdrawnProfits),
                ExpectedProfits = (int)result.UserBills.Where(o => o.UserId == user_id && o.Active == false).Sum(o => o.UserProfit)
            };
        }


    }
}