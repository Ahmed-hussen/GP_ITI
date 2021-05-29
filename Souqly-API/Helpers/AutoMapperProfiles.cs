using AutoMapper;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Orders;
using Souqly_API.Dtos.User;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Models;

namespace Souqly_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
         public AutoMapperProfiles()
        {
            CreateMap<UserForRegister,User>();// Create
            CreateMap<User, UserForRegister>();// Get 
            CreateMap<User,UserForDetails>();// Get Data
            CreateMap<AddToCartDto,ProductOptionCart>();// Create
 

            CreateMap<ProductOptionCart,GetFromCartDto>();// Get Data

            CreateMap<AddOrderDto,Order>();// Create
            CreateMap<AddOrderDto,Shipping>();// Create
            CreateMap<AddOrderDto,Bill>();// Create
            CreateMap<AddOrderDto,OrderDetail>();// Create


            CreateMap<Order, SupplierOrderDto>(); //get
            CreateMap<OrderDetail, SupplierOrderDto>(); //get
            CreateMap<Product, SupplierOrderDto>();

        }
    }
}