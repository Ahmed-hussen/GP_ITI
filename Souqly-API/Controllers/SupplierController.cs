using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Souqly_API.Services;
using AutoMapper;
using Souqly_API.Dtos.Supplier;

namespace Souqly_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
        //[Route("getOrders}")]
        /*
        private readonly ISupplierRepo _repo;
        private readonly IMapper _mapper;

        public SupplierController(ISupplierRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrders(int SupplierId)
        {

            var orderDetails = await _repo.GetOrders(SupplierId);

            var supplierOrders = _mapper.Map<SupplierOrderDto>(orderDetails);
            return Ok(supplierOrders);

        }
        */
    }
}
