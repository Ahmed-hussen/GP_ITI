import { Component, Input, OnInit } from '@angular/core';
import { Product } from '_models/ola/Product';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ProductOptionComponent } from '../product-options/product-options.component';
import { config } from 'rxjs';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [DialogService, MessageService]
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  ref:DynamicDialogRef;

  quantity:number;
  constructor(private dialogService: DialogService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.quantity = 1;
  }


  showOptionsDialog(){
    this.ref = this.dialogService.open(ProductOptionComponent, {
      data: this.product,
      width: '70%',
      contentStyle: {"max-height": "500px", "overflow": "auto", "border-radius": "40px", "padding": "30px"},
      baseZIndex: 10000,
      style: {"direction":"rtl"},
      showHeader:false
    });

  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  //Add produt to cart
  addToCart(){
    alert(this.quantity);
    //check the stockin
    //if required quantuty is available add to cart
    //else show message to user
  }

}
