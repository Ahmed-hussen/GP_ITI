﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Souqly_API.Services;
using AutoMapper;
using Souqly_API.Dtos.Supplier;
using Souqly_API.Models;

namespace Souqly_API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SupplierController : ControllerBase
    {
     
        
        private readonly ISupplierRepo _repo;
        private readonly IMapper _mapper;

        public SupplierController(ISupplierRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrders(int id)
        {

            List<OrderDetail> orderDetails = await _repo.GetOrders(id);

            List<SupplierOrderDto> supplierOrders = _mapper.Map<List<SupplierOrderDto>>(orderDetails);
            for (int i = 0; i < orderDetails.Count; i++)
            {
                supplierOrders[i].ProductName = orderDetails[i].Product.ProductName;
                supplierOrders[i].Status = orderDetails[i].Order.Status;
                supplierOrders[i].OrderDate = orderDetails[i].Order.OrderDate;
            }
            return Ok(supplierOrders);

        }
        
    }
}