using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;
using Souqly_API.Models;
using Souqly_API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Souqly_API.Controllers
{
    [Route("api")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
          
        private readonly IMapper _mapper;

        public CategoriesController(ISupplierRepo service, IMapper mapper, ISouqlyRepo IsouqlyRepo)
        {
            _mapper = mapper;
        }//end of constructor


        
        //  [HttpGet("allcategories")]
        // public async Task<IActionResult> AddImageForProduct()
        // {
        //     //return 
        // }


    }//end of class

}//end of namespace