using System;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Carts;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("[Controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;

        CartController(ISouqlyRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;

        }
            [HttpGet("{id}")]
        public async Task<IActionResult> GetCart(int id)
        {
return NotFound();
        }
        [HttpPost("AddToCart")]
        public async Task<IActionResult> AddToCart(AddToCartDto model)
        {
            var maketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            if (await _repo.MarketIsExist(Int32.Parse(maketingId)))
            {
                Cart cart = new Cart()
                {
                    MarkitingId = Int32.Parse(maketingId)
                };
            }
            else{
            //    int cartId= GetCart(Int32.Parse(maketingId));
            }
            var Cart = _mapper.Map<ProductOptionCart>(model);

            _repo.Add(Cart);
            await _repo.SaveAll();
            return Ok(Cart);
        }

    }
}