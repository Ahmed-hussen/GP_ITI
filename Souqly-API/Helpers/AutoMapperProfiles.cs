using AutoMapper;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.User;
using Souqly_API.Models;

namespace Souqly_API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
         public AutoMapperProfiles()
        {
            CreateMap<UserForRegister,User>();// Create
            CreateMap<User,UserForDetails>();// Get Data
            CreateMap<AddToCartDto,ProductOptionCart>();// Create
            CreateMap<ProductOptionCart,GetFromCartDto>();// Get Data

            CreateMap<AddToCartDto,Order>();// Create
            CreateMap<AddToCartDto,Shipping>();// Create
            CreateMap<AddToCartDto,Bill>();// Create
            CreateMap<AddToCartDto,OrderDetail>();// Create


        }
    }
}