import { Component, OnInit } from '@angular/core';
import { SupplierOrder } from '_models/SupplierOrder';
import { SupplierOrderService } from '_services/supplier-service.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-supplier-orders',
  templateUrl: './supplier-orders.component.html',
  styleUrls: ['./supplier-orders.component.css']
})
export class SupplierOrdersComponent implements OnInit {

  orders:SupplierOrder[];
  cols:any[];

  constructor(private supplierService:SupplierOrderService) { }

  ngOnInit(): void {
    alert("hii");

    this.supplierService.getOrders().subscribe(d =>{
      console.log(d);
      this.orders = d;
      
    });
    // this.orders = [
    //   {
    //     "OrderId": 4,
    //     "OrderDate":"22/4/1998",
    //     "Quantity": 4,
    //     "TotalOptionPrice": 40,
    //     "Status": "shipped"
    //   },
    //   {
    //     "OrderId": 4,
    //     "OrderDate":"22/4/1998",
    //     "Quantity": 4,
    //     "TotalOptionPrice": 40,
    //     "Status": "shipped"
    //   },
    //   {
    //     "OrderId": 4,
    //     "OrderDate":"22/4/1998",
    //     "Quantity": 4,
    //     "TotalOptionPrice": 40,
    //     "Status": "shipped"
    //   }
    // ]
    this.cols = [
      { field: 'orderId', header: 'Order Id' },
      { field: 'orderDate', header: 'Order Date' },
      { field: 'productId', header: 'Product Id' },
      { field: 'productName', header: 'Product Name' },
      { field: 'quantity', header: 'Quantity' },
      { field: 'totalOptionPrice', header: 'Total Price' },
      { field: 'status', header: 'Status' }
  ];
  }

}
