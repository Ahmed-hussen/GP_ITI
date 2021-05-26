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
  constructor(private http: HttpClient){   
  }
  
  getOrders(){
    this.SupplierId = AuthServicesService.currentUser.id;
    //return this.departments;
    return this.http.get<SupplierOrder[]>(this.url+"GetOrders/"+this.SupplierId);
  }

//   addDepartment(dept:Department){
//     //this.departments.push(dept);
//     return this.http.post(this.url, dept);
//   }

//   deleteDepartment(dept:Department){
//     return this.http.delete(this.url+"/"+dept.Id);
//   }

//   updateDepartment(dept:Department){
//     return this.http.put(this.url+"/"+dept.Id, dept);
//   }
}
