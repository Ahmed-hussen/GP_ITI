using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Products;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Souqly_API.Controllers
{   
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
        public async Task<IActionResult> GetProducts()
        {
            var prods = await _repo.GetProducts();
        

            var productsToReturn = _mapper.Map<List<ProductDto>>(prods);
            for (int i = 0; i < productsToReturn.Count; i++)
            {
                productsToReturn[i].images = new List<string>();
                foreach (var item in prods[i].Images)
                {
                   
                    productsToReturn[i].images.Add(item.Url);
                }
                 
            }


            return Ok(productsToReturn);


        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id)
        {

            var product = await _repo.GetProductById(id);


            return Ok(product);


        }
    }
}
