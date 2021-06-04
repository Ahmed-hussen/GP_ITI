using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Shipping;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{
    [Route("[Controller]/[Action]")]
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

        [HttpPost]
        public async Task<IActionResult> AddToCart(AddToCartDto model)
        {
            var marketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            int CartId;
            //Get the Id of the Current User
            if (await _repo.IsMarketHaveCart(Int32.Parse(marketingId)))
            {
                CartId = await _repo.GetCartID(Int32.Parse(marketingId));
            }
            else
            {
                Cart cart = new Cart()
                {
                    MarketingId = Int32.Parse(marketingId)
                };
                _repo.Add(cart);
                await _repo.SaveAll();
                CartId = await _repo.GetCartID(Int32.Parse(marketingId));
            }
            model.CartId = CartId;
            var ItemPrice = await _repo.GetOptionPrice(model.OptionId);
            model.NewPrice = ItemPrice * model.Quantity;
            ProductOptionCart ProOptionCart;
            if (await _repo.IsOptionExist(model.OptionId))
            {

                var DBOption = await _repo.GetOption(model.OptionId, model.CartId);

                model.Quantity = DBOption.Quantity + model.Quantity;
                model.NewPrice = DBOption.NewPrice + model.NewPrice;

                ProOptionCart = _mapper.Map(model, DBOption);
                int Stock = await _repo.GetStock(ProOptionCart.OptionId);
                if (ProOptionCart.Quantity <= Stock)
                {
                    if (await _repo.SaveAll()) return NoContent();
                }
                else
                {
                    return NotFound("عفوا الكمية المطلوبة غير متاحة");
                }
            }
            else
            {
                ProOptionCart = _mapper.Map<ProductOptionCart>(model);

                int Stock = await _repo.GetStock(ProOptionCart.OptionId);
                if (ProOptionCart.Quantity <= Stock)
                {
                    _repo.Add(ProOptionCart);
                    await _repo.SaveAll();
                    return Ok();
                }
                else
                {
                    return NotFound("عفوا الكمية المطلوبة غير متاحة");
                }

            }
            return Ok();

        }

      [HttpGet("{id}/{model}")]
        public async Task<IActionResult> UpdateQuantityCart(int id, int model)
        {

            var marketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

            var CartId = await _repo.GetCartID(Int32.Parse(marketingId));

            var OptionfromDB = await _repo.GetOption(id, CartId);
         //   _mapper.Map(model, OptionfromDB);

            float calc=  OptionfromDB.Option.ItemPrice * model;
            OptionfromDB.NewPrice =calc;
            OptionfromDB.Quantity =model;

            int Stock = await _repo.GetStock(id);
            if (model==0){
                return StatusCode(500,"ادخل كميه واحده او اكثر");
            }
            else if
            (model <= Stock)
            {

               await _repo.SaveAll();
               return Ok();
            }
            else{
              //  throw new Exception("عفوا الكمية المطلوبة غير متاحة");
                return StatusCode(500,"عفوا الكمية المطلوبة غير متاحة");
                }




        }


        [HttpGet]
        public async Task<IActionResult> GetProductsFromCart()
        {
            var marketId=User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var CartId = await _repo.GetCartID(Int32.Parse(marketId));
            var CartItem = await _repo.GetCart(CartId);

            //   var CartItemToReturn = _mapper.Map<GetFromCartDto>(CartItem);

            return Ok(CartItem);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProOptionFromCart(int id)
        {
            var marketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var CartId = await _repo.GetCartID(Int32.Parse(marketingId));

            var Option = _repo.GetOption(id, CartId);
            _repo.Delete(Option);
            await _repo.SaveAll();

            return Ok();
        }

        [HttpGet]
        public async Task<IActionResult> GetAllShipping(){

            var Allshipping=await _repo.GetAllshipping();
            var data= _mapper.Map<IEnumerable<AllShippingDto>>(Allshipping);
            return Ok(data) ;
        }

    }
}