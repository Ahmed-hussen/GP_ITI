import { Component, OnInit } from '@angular/core';
import { User } from '_models/user';

import { AuthServicesService } from '_services/AuthServices.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  nstd:User[]=[]
  constructor(private serve:AuthServicesService , private autserve:UserCrudService) { }

  ngOnInit(): void {
  
    this.autserve.getAll().subscribe(a=>{this.nstd=a});

  }
}
