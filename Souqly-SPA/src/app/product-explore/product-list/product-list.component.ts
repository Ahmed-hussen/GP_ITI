import { Component, OnInit } from '@angular/core';
import { ManageCategories } from '_models/ManageCategories';
import { Product } from '_models/ola/Product';
import { AdminMCategoriesService } from '_services/admin-mcategories.service';
import { ProductServiceService } from '_services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Product[];
  allCategories: ManageCategories[];
  selectedCategory: ManageCategories;
  constructor(private productServ:ProductServiceService,private adminMCategoriesServ: AdminMCategoriesService) { }

  ngOnInit(): void {
    this.productServ.getProducts().subscribe(
      prods => this.products = prods
    )
    this.loadCategories();

  }
  loadCategories(){
    this.adminMCategoriesServ.getCategories().subscribe(d=>{
      this.allCategories = d;
    });
  }

  CategoryChanging()
  {

    this.productServ.getCategoryProducts(this.selectedCategory.id).subscribe(
      prods => this.products = prods
    )

  }
}
