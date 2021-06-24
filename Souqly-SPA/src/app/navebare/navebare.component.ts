import { AuthServicesService } from './../../../_services/AuthServices.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductOptionCart } from '_models/productOptionCart';
import { CartMangmentService } from '_services/cart-mangment.service';
import { AppComponent } from '../app.component';
import { SupplierOrderService } from '_services/supplier-service.service';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
import { UserCrudService } from '_services/user-crud.service';
import { User } from '_models/user';
import { AlertService } from '_services/alertifay.service';

@Component({
  selector: 'app-navebare',
  templateUrl: './navebare.component.html',
  styleUrls: ['./navebare.component.css']
})
export class NavebareComponent implements OnInit {
  count:number;
  products: ProductOptionCart[];
  isSupplier:boolean;
  constructor(public authService: AuthServicesService, private router: Router, private resolver: ActivatedRoute,
    private cartService: CartMangmentService, private supplierService:SupplierOrderService,private alert:AlertService,private rout:Router ) { }

   //define connection SR
   hubConnection:HubConnection;
   nstd:User;
  ngOnInit(): void {
    // this.resolver.data.subscribe(
    //   data=>{this.products=data['options']}
    // )
this.nstd.userName=this.authService.currentUser.userName;
   console.log("dddddddddddddddd") ;
    this.loadCart();
    
    if (this.authService.decodedToken.role == "Supplier")
      this.supplierService.getCountOfOrders().subscribe(
        d => this.count = this.supplierService.count
      );
      
        
    // this.loadCart()

   //define conction and give it api service url
    this.hubConnection=new HubConnectionBuilder().withUrl("http://localhost:5000/cart").build();

    //start Connection
    this.hubConnection.start();

    //define subscribe method to refresh
    this.hubConnection.on('refresh',()=>{
      this.loadCart();

    })



  }
  loadCart() {
    this.cartService.getOptionsFromCart().subscribe(
      succ => { this.products = succ, this.findsum(succ) },
      err => { }
    )
  }

  public total = 0;
  findsum(data) {
    this.total=0;
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

  RefreshCart(){

    this.hubConnection.invoke('refresh');
  //  this.loadCart()
  }
  /////////////////////////
  add()
  {
    if(this.authService.currentUser?.emailConfirmed==false)
    {
      this.rout.navigateByUrl("/products");
      this.alert.success("  عذرا... لن تستطيع رفع المنتجات لدينا حاليا ");
    }
    else
    {
      this.alert.success("لقد تمت الموافقه عليك كمورد لدينا")
    }
  }


}
