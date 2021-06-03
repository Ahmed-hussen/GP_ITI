import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOptionCart } from '_models/productOptionCart';
import { Shipping } from '_models/Shipping';
import { AlertService } from '_services/alertifay.service';
import { CartMangmentService } from '_services/cart-mangment.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  shipping: Shipping[];
  options: ProductOptionCart[];
  NewQuantity: ProductOptionCart;
  company: string = null;
  selectedCompany: string = null;
  public total = 0;
  public Updateprice = 0;
  public ShippingPrice =0;
  public DealPrice = 0;
  public totalProductPrice=0;
  constructor(private resolve: ActivatedRoute, private services: CartMangmentService, private router: Router,
  private alertifyService: AlertService
  ) {
  }
  ngOnInit() {
    this.resolve.data.subscribe(
      data => {
        this.options = data['checkout']
        this.shipping = data['shipping']
        this.findsum(data['checkout'])
      });
  }

  TotalPrices( total){
    this.totalProductPrice=total+this.DealPrice;
}

  UpdateDealPrice(event){
    this.DealPrice=event.target.value * 10/100;
  }
  UpdatePrice(value) {

   // this.UpdatePrice = value;
  }

  findsum(data) {
    this.options = data
    for (let j = 0; j < data.length; j++) {
      this.total += this.options[j].quantity * this.options[j].option.itemPrice;
      this.TotalPrices(  this.total)
    }
  }

  updateQuantity(id, NewQuantity) {
    //    this.NewQuantity.quantity=NewQuantity;
    this.services.updateQuantity(id, NewQuantity).subscribe(
      () => {
        this.total = 0;

        this.services.getOptionsFromCart().subscribe(
          res => { this.findsum(res) }
        )

        this.alertifyService.success("قد تم بنجاح إضافه الكميه الجديده");
        //  alertify.success("قد تم بنجاح إضافه الكميه الجديده")
        // window.location.reload()
      },
      e => {
        this.alertifyService.error(e.error);
      }
    )
  }

}