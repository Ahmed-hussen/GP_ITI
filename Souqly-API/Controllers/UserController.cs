using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Souqly_API.Dtos.User;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;
        public UsersController(ISouqlyRepo repo, IMapper mapper)
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
        //admin function
        [HttpGet("GetAll")]
        public async Task<IActionResult> GetAllUser()
        {
            var allusers = await _repo.GetAllUsers();
            var data = _mapper.Map<System.Collections.Generic.IEnumerable<UserForManage>>(allusers);

            return Ok(data);
        }
        //gitUser
        [HttpGet("GetUserData/{id}")]
        public async Task<IActionResult> Getuserr(int id)
        {

            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserForManage>(user);
            return Ok(userToReturn);
        }
        //git visa data
        [HttpGet("GetVisaData/{id}")]
        public async Task<IActionResult> GetVisaData(int id)
        {

            var user = await _repo.GetUser(id);
            var userToReturn = _mapper.Map<UserVisa>(user);
            return Ok(userToReturn);
        }


        //visa Data

        [HttpGet("profits/{user_id}")]
        public async Task<IActionResult> GetUserProfits(int user_id)
        {
            var result = await _repo.GetUserProfits(user_id);
            return Ok(result);
        }

        [HttpPost("withdraw")]
        public async Task<IActionResult> PostWithdrawRequest([FromBody] int money)
        {
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);
            var result = await _repo.AddWithdrawnRequest(userId, money);
            if (result == 0)
                return NotFound();

            return NoContent();
        }

        [HttpPost("paymentdetails")]
        public async Task<IActionResult> paymentdetails(UserVisa model)
        {
            var currentuserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value);//Get id
            var user = await _repo.GetUser(currentuserId);
            var newUser = _mapper.Map(model, user);
            _repo.Update(newUser);
            await _repo.SaveAll();
            return Ok(newUser);

        }

    }  
}