import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserForWithdrawRequest } from '_models/ola/UserForWithdrawRequest';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  url:string = environment.ApiUrl + 'Dashboard/';
  UserId:number;
  constructor(private http: HttpClient) { }

  getWithdrawRequests(){
   
    return this.http.get<UserForWithdrawRequest[]>(this.url+"GetWithdrawRequests")
  }

  confirmWithdrawRequests(reqId:number){
    
    return this.http.put(this.url+"ConfirmWithdrawRequest", reqId);
  }

}
