using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Carts;
using Souqly_API.Dtos.Orders;
using Souqly_API.Models;
using Souqly_API.Services;

namespace Souqly_API.Controllers
{

    [Route("[Controller]")]
    [ApiController]
    public class OrderControler : ControllerBase
    {
        private readonly ISouqlyRepo _repo;
        private readonly IMapper _mapper;

      public OrderControler(ISouqlyRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;

        }

        [HttpPost("MakeOrder")]
        public async Task<IActionResult> MakeOrder(AddOrderDto model)
        {

        var order=  _mapper.Map<Order>(model);
        var shipping=  _mapper.Map<Shipping>(model);
        var bill= _mapper.Map<Bill>(model);



        _repo.Add(bill);
        await _repo.SaveAll();
        order.BillId=bill.Id;

        _repo.Add(order);
        await _repo.SaveAll();


       //  orderDetail.OrderId=order.Id;

        var marketingId = User.FindFirst(ClaimTypes.NameIdentifier).Value;

        int cartID= await _repo.GetCartID(int.Parse(marketingId));

        List<int> OptionsIds= await _repo.GetOptionsIds(cartID);

        foreach( var OptionIdInCart in OptionsIds )
        {
         var Cart=await _repo.GetProductOption(OptionIdInCart,cartID);
         model.Quantity=Cart.Quantity;
         model.TotalOptionPrice=Cart.NewPrice;
         model.OrderId=order.Id;
         model.ProductId=Cart.Option.Product.Id;
         var orderDetail=   _mapper.Map<OrderDetail>(model);

          _repo.Add(orderDetail);
          await _repo.SaveAll();
          _repo.Delete(Cart);
          await _repo.SaveAll();
        }




    //    _repo.Add(shipping);





          return Ok();

        }



    }
}