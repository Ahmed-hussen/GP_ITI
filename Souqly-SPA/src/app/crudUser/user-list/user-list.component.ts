import { Component, OnInit } from '@angular/core';
import { User } from '_models/user';
import { AuthServicesService } from '_services/AuthServices.service';
import { UserCrudService } from '_services/user-crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 nstd:User[]=[]
  constructor(private serve:AuthServicesService , private autserve:UserCrudService) { }

  ngOnInit(): void {
  
    this.autserve.getAll().subscribe(a=>{this.nstd=a});

  }

}
