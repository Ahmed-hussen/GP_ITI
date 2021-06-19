import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '_models/ola/Product';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url:string = environment.ApiUrl + 'Product/';
  SupplierId:number;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private http: HttpClient, private authService:AuthServicesService){
  }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  getProducts(){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Product[]>(this.url, httpOptions);

  }//end ofgetProducts

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  GetSupplierProducts(id:number){
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
       'Authorization': "Bearer "+ window.localStorage.getItem('token')
    });

    const httpOptions = {
      headers: headers_object
    };
    return this.http.get<Product[]>(this.url+"GetSupplierProducts/"+id, httpOptions);

  }//end ofgetProducts

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

deleteProduct(id:number){

  var headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
     'Authorization': "Bearer "+ window.localStorage.getItem('token')
  });

  const httpOptions = {
    headers: headers_object
  };

  return this.http.delete("https://localhost:44309/Product/deleteProduct/"+id,httpOptions);

}//end of deleteProduct

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
