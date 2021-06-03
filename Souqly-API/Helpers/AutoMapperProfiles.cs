using AutoMapper;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Orders;
using Souqly_API.Dtos.Shipping;
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
            CreateMap<UpdateCartDto,ProductOptionCart>();// Create

            CreateMap<ProductOptionCart,GetFromCartDto>();// Get Data

            CreateMap<AddOrderDto,Order>();// Create
            CreateMap<AddOrderDto,Shipping>();// Create
            CreateMap<AddOrderDto,Bill>();// Create
            CreateMap<AddOrderDto,OrderDetail>();// Create

            CreateMap<Shipping,AllShippingDto>();// Get Data

            CreateMap<Order,OrderDetailsDto>()// Get Data
             .ForMember(dest=>dest.City,opt=>{opt.MapFrom(src=>src.Shipping.City);})
             .ForMember(dest=>dest.price,opt=>{opt.MapFrom(src=>src.Shipping.price);})
             .ForMember(dest=>dest.Duration,opt=>{opt.MapFrom(src=>src.Shipping.Duration);})
             .ForMember(dest=>dest.DealPrice,opt=>{opt.MapFrom(src=>src.Bill.DealPrice);})
             .ForMember(dest=>dest.SiteProfits,opt=>{opt.MapFrom(src=>src.Bill.SiteProfits);})
             .ForMember(dest=>dest.ShippingProfits,opt=>{opt.MapFrom(src=>src.Bill.ShippingProfits);})
            .ForMember(dest=>dest.MarktingProfits,opt=>{opt.MapFrom(src=>src.Bill.MarktingProfits);});
             //.ForMember(dest=>dest.OrderDetails,opt=>{opt.MapFrom(src=>src.OrderDetails);});

            CreateMap<Order,OrderListDto>()// Get Data
          //  CreateMap<Bill,OrderListDto>();// Get Data
             .ForMember(dest=>dest.MarktingProfits,opt=>{opt.MapFrom(src=>src.Bill.MarktingProfits);});


        }
    }
}