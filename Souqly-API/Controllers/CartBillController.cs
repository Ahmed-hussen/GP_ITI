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


        [Route("GetShippingPrice/{ShippingId}")]
        [HttpGet]
        public async Task<IActionResult> GetShippingPrice(int ShippingId)
        {
        float ShippingPrice =await  _repo.GetShippingPrice(ShippingId);

        return Ok(ShippingPrice);

        }



        [Route("GetSouqlyCommission/{TotalPrice}")]
        [HttpGet]
        public async Task<IActionResult> GetSouqlyCommission(float TotalPrice)
        {
        float SouqlyCommission =TotalPrice*1/10 ;

        return Ok(SouqlyCommission);

        }


        [Route("GetDealPrice/{DealPrice}")]
        [HttpGet]
        public async Task<IActionResult> GetDealPrice(float DealPrice)
        {

        return Ok(DealPrice);

        }


        [Route("GetTotalOrderPrice/{DealPrice}")]
        [HttpGet]
        public async Task<IActionResult> GetTotalOrderPrice(float DealPrice)
        {

        return Ok(DealPrice);

        }


    }


}