using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.User;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Souqly_API.Controllers
{
        [Route("api/[controller]/[action]")]
        [ApiController]
        public class MAccountManageController : ControllerBase
        {
            private IMapper _mapper;
            private ISouqlyRepo _repo;

            public MAccountManageController(ISouqlyRepo repo, IMapper mapper)
            {
                _mapper = mapper;
                _repo = repo;
            }

            [HttpGet]
            public async Task<IActionResult> GetData()
            {
                var CurrentUserId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier).Value); // get the user id 
                var CurrentUser = await _repo.GetUser(CurrentUserId);
                var userToReturn = _mapper.Map<UserForManage>(CurrentUser);
                return Ok(userToReturn);
            }

            //[HttpPut]
            //public async Task<IActionResult> UpdateData( UserForManage Data)
            //{
            //   // var User = await _repo.GetUser(id); // get the user 
            //    var UserToUpdated =  _mapper.Map<UserForManage>(Data);
            //    _repo.Update(UserToUpdated);
            //    return Ok(UserToUpdated);
            //}
        }
    }

