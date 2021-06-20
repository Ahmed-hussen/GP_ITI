import { Component, OnInit } from '@angular/core';
import { Product } from '_models/ola/Product';
import { AuthServicesService } from '_services/AuthServices.service';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-SupplierProductsList',
  templateUrl: './SupplierProductsList.component.html',
  styleUrls: ['./SupplierProductsList.component.css']
})
export class SupplierProductsListComponent implements OnInit {

  products: Product[];
  SupplierId:number;

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  constructor(private productServ: ProductServiceService ,private authService:AuthServicesService) { }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ngOnInit():void {

    //hna n3ml el function ell hatgeb bl id bta3 el supplier
    this.SupplierId = this.authService.decodedToken.nameid;
     this.productServ.GetSupplierProducts(this.SupplierId).subscribe(
          prods => {this.products = prods
            console.log("hereeeeeeeeeeeee==1==>>"+prods);
            console.log("hereeeeeeeeeeeee==2==>>"+this.products);
          });

  }//end of ngOnInit

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////


}
