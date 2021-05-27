import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SupplierOrder } from '_models/SupplierOrder';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierOrderService{
  url:string = environment.ApiUrl + 'Supplier/';
  SupplierId:number;
  constructor(private http: HttpClient, private authService:AuthServicesService){   
  }
  
  getOrders(){
    alert("from service");
    //this.SupplierId = this.authService.currentUser.id;
    return this.http.get<SupplierOrder[]>(this.url+this.SupplierId);
  }

}
