using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Souqly_API.Dtos.User;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class  UsersController : ControllerBase
    {
        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;
        public UsersController(ISouqlyRepo repo, IMapper mapper )
        {
   
            _mapper = mapper;
            _repo = repo;

        }

         [HttpGet("{id}", Name = "GetUser")]
        public async Task<IActionResult> Getuser(int id)
        {
         //   var isCurrentUser = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value) == id;
            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForDetails>(user);
            return Ok(userToReturn);
        }

        [HttpGet("profits/{user_id}")]
        public async Task<IActionResult> GetUserProfits(int user_id)
        {
            var result = await _repo.GetUserProfits(user_id);
            return Ok(result);
        }

    }
}