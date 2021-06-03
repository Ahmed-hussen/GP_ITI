import { Component, Input, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { config } from 'rxjs';
import { Product } from '_models/Product';
import { ProductWithOptions } from '_models/ProductWithOptions';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-options',
  templateUrl: './product-options.component.html',
  styleUrls: ['./product-options.component.css']
})
export class ProductOptionComponent implements OnInit {
    id:number;
    product: ProductWithOptions;
    quantity:number;
    productToCart:ProductWithOptions;
    selectedOptionId:number;
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
      this.id = this.config.data;
        this.productService.getProductById(this.id).subscribe(
          p => this.product = p
        );
        
    }

    selectProduct(product: Product) {
        this.ref.close(product);
    }

    closeModel(){
      this.ref.close();
    }
    selectButton(id:number){
      this.selectedOptionId = id;
    }

}
