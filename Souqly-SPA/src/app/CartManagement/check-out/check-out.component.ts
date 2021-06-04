import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MakeOrder } from '_models/MakeOrder';
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
  myForm:FormGroup;

  OrderData:MakeOrder;

  shipping: Shipping[];
  options: ProductOptionCart[];


  NewQuantity: ProductOptionCart;
  company: string = null;
  selectedCompany: string = null;
  public total = 0;
  public Updateprice  = 0;
  public DealPrice;
  public someProperty = 0;
  public totalPrices=0;
  constructor(private resolve: ActivatedRoute, private services: CartMangmentService, private router: Router,
  private alertifyService: AlertService, private fp:FormBuilder
  ) {
  }
  ngOnInit() {
    this.resolve.data.subscribe(
      data => {
        this.options = data['checkout']
        this.shipping = data['shipping']
        this.findsum(data['checkout'])
      });
      this.MakeOrderValidation();
  }



  UpdateDealPrice(event){
    this.DealPrice=event.target.value * 10/100;
  }


  findsum(data) {
    this.options = data
    for (let j = 0; j < data.length; j++) {
      this.total += this.options[j].quantity * this.options[j].option.itemPrice;
      this.TotalPrices(  this.total)
    }
  }

  makeOrder(){
    if(this.myForm.valid){
      // console.log(this.myForm.value)
     // console.log( JSON.stringify(this.myForm.getRawValue()))
    //  this.myForm.controls.siteProfits.setValue(8)
   //   console.log( this.myForm.value.siteProfits);
      this.OrderData=Object.assign({},this.myForm.value)
      this.services.MakeOrder(this.OrderData).subscribe(
        result=>{
          this.alertifyService.success("قد تم طلبك بنجاح")
          this.router.navigate(['/OrderDetails/',result]);
        },
        e=>{
          this.alertifyService.error(e.error)
          console.log(e.error)
        }
      )
    }

  }

  MakeOrderValidation(){
    this.myForm=this.fp.group(
      {
        dealPrice: ['', [Validators.required,Validators.max(100000000)]],
        clientName: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        shippingId: ['', Validators.required],
        siteProfits: ['', Validators.required],
        shippingProfits: ['', Validators.required],
        marketingProfits:['', Validators.required],

        // dealPrice: [''],
        // clientName: [''],
        // address: [''],
        // phone: [''],
        // shippingId: [''],
        // siteProfits: [''],
        // shippingProfits: [''],
        // marketingProfits:[''],
      }

    )

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

  city="";
  modelChangeFn(id) {
    for (let j = 0; j < this.shipping.length; j++) {
      if(this.shipping[j].id==id){
        this.someProperty=this.shipping[j].price;
        this.city=this.shipping[j].city;
      }
    }

  }
  onChange(id){
    alert(id.target.value)

  }
  TotalPrices( total){
      this.totalPrices=total+this.Updateprice;
  }

  UpdatePrice(value) {

   // this.UpdatePrice = value;
  }





}