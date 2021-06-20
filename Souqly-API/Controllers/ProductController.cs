using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Products;
using Souqly_API.Helpers;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Controllers
{  
    [AllowAnonymous]
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepo _repo;
        private readonly IMapper _mapper;

        public ProductController(IProductRepo repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
    public async Task<IActionResult> GetProducts([FromQuery]ProductParams productParams)
        {
            var prods = await _repo.GetProducts(productParams);
            Response.AddPagination(prods.CurrentPage,prods.PageSize,prods.TotalCount,prods.TotalPages);
            return Ok(prods);


        }

        /*
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {

            var product = await _repo.GetProductById(id);


            return Ok(product);


        }*/
    }
}
