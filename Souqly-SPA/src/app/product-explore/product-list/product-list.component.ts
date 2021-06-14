import { Component, OnInit } from '@angular/core';
import { Product } from '_models/ola/Product';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];

  sortOptions: any[];
  sortOrder: number;
  sortField: string;

  constructor(private productServ:ProductServiceService) { }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe(
      prods => this.products = prods
    );

    this.sortOptions = [
      {label: 'حسب الأعلى سعر', value: '!price'},
      {label: 'حسب الأقل سعر', value: 'price'}
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
