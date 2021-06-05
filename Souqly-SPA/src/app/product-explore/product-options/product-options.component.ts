import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Product } from '_models/ola/Product';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionComponent implements OnInit {
    // id:number;
    product: Product;
    
    optionId:number;
    quantity:number;

    cols: any[];

    responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
            
    constructor(private productService: ProductServiceService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
      this.product = this.config.data;
      this.quantity = 1;
    }

    selectProduct(product: Product) {
        this.ref.close(product); 
    }

    closeModel(){
      this.ref.close();
    }
   

    addToCart(){
      alert(this.optionId + ", " + this.quantity);
      //send the productId with the optionId and quantity to the server to add to the database
      
      //add product to the cart using --> product, optionId, and quantity declared above.
      //the product has a list of options, select the required option using optionId.
    }

}
