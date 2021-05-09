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

      public CartController(ISouqlyRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;

        }
        [HttpGet("{id}") ]
         public async Task<int> GetCartId(int id) //get cartID of the current Marketing
         {
          int cartId = await  _repo.GetCartID(id);
          return cartId;

         }




        [HttpPost("AddToCart")]
        public async Task<IActionResult> AddToCart(AddToCartDto model)
        {
            var marketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            int CartId;
            //Get the Id of the Current User
            if (await _repo.IsMarketHaveCart(Int32.Parse(marketingId)))
            {
                CartId= await GetCartId(Int32.Parse(marketingId));

            }
            else{

            Cart cart = new Cart()
                {
                    MarketingId = Int32.Parse(marketingId)
                };
                _repo.Add(cart);
                await  _repo.SaveAll();
               CartId= await GetCartId(Int32.Parse(marketingId));
            }
             model.CartId=CartId;
            ProductOptionCart ProOptionCart;
             if (await _repo.IsOptionExist(model.OptionId))
            {
            var OldProOptionCart = _mapper.Map<ProductOptionCart>(model);
            var DBOption=  await _repo.GetOption(model.OptionId , model.CartId);
           // var OldProOptionCart = _mapper.Map<ProductOptionCart>(model);
            model.Quantity=DBOption.Quantity + model.Quantity;
            model.NewPrice=DBOption.NewPrice + model.NewPrice;

             ProOptionCart = _mapper.Map<ProductOptionCart>(model);
            ProOptionCart.Id=DBOption.Id;
            OldProOptionCart.Id=DBOption.Id;

             _repo.Delete(ProOptionCart);


            }
            else{

             ProOptionCart = _mapper.Map<ProductOptionCart>(model);

        //    _repo.Add(ProOptionCart);

            }
          int Stock= await _repo.GetStock(ProOptionCart.OptionId);
          if(ProOptionCart.Quantity<=Stock){
           _repo.Add(ProOptionCart);
           await _repo.SaveAll();
              return Ok();
              }
          else
          {
            return Ok("عفوا الكمية المطلوبة غير متاحة");
          }
        }

        [Route("GetCart/{CartID}")]
        [HttpGet]
        public async Task<IActionResult> GetCart(int CartID)
        {
        var CartItem=await _repo.GetCart(CartID);

        var CartItemToReturn = _mapper.Map<GetFromCartDto>(CartItem);

        return Ok(CartItemToReturn);

        }



        







        }
    }

