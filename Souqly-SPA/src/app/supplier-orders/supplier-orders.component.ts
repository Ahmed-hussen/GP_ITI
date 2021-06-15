import { Component, OnInit } from '@angular/core';
import { SupplierOrder } from '_models/ola/SupplierOrder';
import { SupplierOrderService } from '_services/supplier-service.service';

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

    this.supplierService.getOrders().subscribe(d => {
      this.orders = d;
    });

    this.cols = [
      { field: 'orderId', header: 'رقم الطلب' },
      { field: 'orderDate', header: 'تاريخ الطلب' },
      { field: 'productId', header: 'رقم المنتج' },
      { field: 'productName', header: 'اسم المنتج' },
      { field: 'quantity', header: 'الكمية' },
      { field: 'totalOptionPrice', header: 'السعر' },
      { field: 'status', header: 'الحالة' }
  ];
  }

}
