import { ProductDataDto } from './../src/app/Dtos/ProductDataDto';
import { ProductOption } from './../src/app/Dtos/productOption';
import { ProductForUploadDto } from '../src/app/Dtos/ProductForUploadDto';
import { Categories } from '../src/app/Dtos/Categories';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
//import { SupplierOrder } from '_models/SupplierOrder';
import { AuthServicesService } from './AuthServices.service';
import { SupplierOrder } from '_models/ola/SupplierOrder';


@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService{
  url:string = environment.ApiUrl + 'Supplier/';
  urll:string= environment.ApiUrl;
  SupplierId:number;
  constructor(private http: HttpClient, private authService:AuthServicesService){
  }

  getOrders(){
    this.SupplierId = this.authService.decodedToken.nameid;
    return this.http.get<SupplierOrder[]>(this.url+this.SupplierId);
  }



  addproduct(productForUploadDto:ProductForUploadDto){

    this.SupplierId = this.authService.decodedToken.nameid;

    // console.log( this.SupplierId );

    var headers_object = new HttpHeaders({
                          'Content-Type': 'application/json',
                          'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };
    productForUploadDto.CategoryId=3;

     var aa=productForUploadDto;
     console.log(aa);

    return this.http.post('https://localhost:5001/api/addproduct/'+this.SupplierId,productForUploadDto,httpOptions);

  }

  addproductoption(productoption:ProductOption){

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

    return this.http.post('https://localhost:5001/api/addproductoption',productoption,httpOptions);

  }//end of addproductoption


  getallcategories(){

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

    return this.http.get<Categories[]>('https://localhost:5001/api/getallcategories',httpOptions);

  }//end of getallcategories

  addnewproduct(product:ProductDataDto){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = { headers: headers_object };

    return this.http.post('https://localhost:44309/api/addproduct',product,httpOptions);
  }

}
