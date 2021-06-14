﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Souqly_API.Dtos.Supplier.SupplierUploadProducts;
using Souqly_API.Models;

namespace Souqly_API.Services
{

    public interface ISupplierRepo
    {
        //Task<List<OrderDetail>> GetOrders(long supplierId);

        Task<int> AddProduct(ProductForUploadDto productForUploadDto);
        Task<int> AddProductMainData(Product ProductData);
        Task<ImageForReturnDto> AddImageForProduct(int productId, ImageForCreateDto imageForCreateDto);


    }
}
