using AutoMapper;
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
        }
    }
}