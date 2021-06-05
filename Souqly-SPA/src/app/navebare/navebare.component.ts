import { AuthServicesService } from './../../../_services/AuthServices.service';
import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOptionCart } from '_models/productOptionCart';
import { CartMangmentService } from '_services/cart-mangment.service';

@Component({
  selector: 'app-navebare',
  templateUrl: './navebare.component.html',
  styleUrls: ['./navebare.component.css']
})
export class NavebareComponent implements OnInit {

  products: ProductOptionCart[];
  isSupplier:boolean;
  constructor(public authService: AuthServicesService, private router: Router, private resolver: ActivatedRoute,
    private cartService: CartMangmentService) { }

  ngOnInit(): void {
    // this.resolver.data.subscribe(
    //   data=>{this.products=data['options']}
    // )
    this.loadCart()
  }
  loadCart() {
    this.cartService.getOptionsFromCart().subscribe(
      succ => { this.products = succ, this.findsum(succ) },
      err => { }
    )
  }

  public total = 0;
  findsum(data) {
    this.products = data

    for (let j = 0; j < data.length; j++) {

      this.total += this.products[j].quantity * this.products[j].option.itemPrice;
    }
  }

  disabledButton() {
    if (this.total == 0) {
      return true;
    }
    else
      return false;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  loggedOut() {
    localStorage.removeItem('token');
    this.authService.decodedToken = null;
    localStorage.removeItem('user');
    this.authService.currentUser = null;
    this.router.navigate(['']);
  }
}
