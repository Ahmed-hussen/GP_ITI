using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{

    [Route("[Controller]")]
    [ApiController]
    public class CartBillController : ControllerBase
    {
        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;


        public CartBillController(ISouqlyRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }



        [Route("GetProductsPrice/{CartID}")]
        [HttpGet]
        public async Task<IActionResult> GetProductsPrice(int CartID)
        {
        float TotalPrice=await  _repo.GetProductPrice(CartID);



        return Ok(TotalPrice);

        }


        


    }
}