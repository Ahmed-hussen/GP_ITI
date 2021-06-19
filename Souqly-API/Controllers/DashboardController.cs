using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("[Controller]/[Action]")]
    [ApiController]
    public class DashboardController :ControllerBase
    {


        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;

       public DashboardController(ISouqlyRepo repo, IMapper mapper)
       {
            _repo = repo;
            _mapper = mapper;
       }



        [HttpGet]
        public async Task<IActionResult> GetCounts()
        {

        var Counts=await _repo.GetCounts();

        return Ok(Counts);
        }







    }
}