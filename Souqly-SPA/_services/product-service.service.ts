import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '_models/ola/Product';
import { PaginationResult } from '_models/Pagination';
import { AuthServicesService } from './AuthServices.service';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url:string = environment.ApiUrl + 'Product/';
  SupplierId:number;

  constructor(private http: HttpClient, private authService:AuthServicesService){   
  }

  getProducts(pageNumber?, pageSize?):Observable<PaginationResult<Product[]>>{
    // paginationResult : To Take data (Result , Pagination) From Headers API ;
    const paginationResult:PaginationResult<Product[]> = new PaginationResult<Product[]>();
    let params=new HttpParams(); // Query Stringنرسل داتا من خلال ال 
    if(pageNumber != null &&  pageSize!=null){
    //'pageNumber' and 'pageSize' get Them From Postman Header API
      params=params.append('pageNumber',pageNumber);
      params=params.append('pageSize',pageSize);
    }

    return this.http.get<Product[]>(this.url,{observe:'response',params}).pipe(
      // pip:Headerفكدا بتعامل مع ال  response علشان لما استخدمت bodyعلشان اعرف اوصل لل 
     
      map(    // data From Body Api
        result=>{
          // paginationResult.result : هما دول اليوزرز اللي جايين في البدي
          paginationResult.result=result.body;
          if(result.headers.get('Pagination')!=null) //Pagination: Header postmanموجوده داخل ال
         {
           // JSON.parse: هو جايلي على هيئه استرينج فعايز احوله ل جاسون
           paginationResult.pagination=JSON.parse(result.headers.get('Pagination'));
         }
         return paginationResult;
        }
      )
    )
  }
}