using AutoMapper;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Orders;
using Souqly_API.Dtos.User;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Models;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;

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

            CreateMap<User,UserForManage>();// Get Data   
            CreateMap<UserForManage, User>();// Create

            CreateMap<AddOrderDto,Order>();// Create
            CreateMap<AddOrderDto,Shipping>();// Create
            CreateMap<AddOrderDto,Bill>();// Create
            CreateMap<AddOrderDto,OrderDetail>();// Create


            CreateMap<Order, SupplierOrderDto>(); //get
            CreateMap<OrderDetail, SupplierOrderDto>(); //get
            CreateMap<Product, SupplierOrderDto>();

            CreateMap<Image, ImageForReturnDto>();  
            CreateMap<ImageForCreateDto, Image>();

            CreateMap<Product, ProductForUploadDto>();
            CreateMap<ProductForUploadDto,Product>();

            CreateMap<Option,ProductForUploadDto>();
            CreateMap<ProductForUploadDto, Option>();

            CreateMap<Option, ProductOptionDataDto>();
            CreateMap<ProductOptionDataDto, Option>();


            CreateMap<Product, ProductDataDto>();
            CreateMap<ProductDataDto, Product>();

        }
    }
}