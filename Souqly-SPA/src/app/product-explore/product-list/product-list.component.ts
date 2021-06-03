import { Component, OnInit } from '@angular/core';
import { Product } from '_models/Product';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  constructor(private productServ:ProductServiceService) { }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe(
      prods => this.products = prods
    )
  }

}
