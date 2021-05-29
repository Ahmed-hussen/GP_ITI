import { Component, Input, OnInit, Output } from '@angular/core';
import { Users } from '_models/users';
import { User } from '_models/user';
import { AuthServicesService } from '_services/AuthServices.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.css']
})

export class ProfileSettingComponent implements OnInit {
 
 nstd:Users=new Users(4,"aliaa","","","123456");
  obj:User;
 
  constructor(private servauth:AuthServicesService) { 
    
    }
    
 
  
 
  ngOnInit(): void {
    this.nstd.userName=this.servauth.currentUser.userName;
    this.nstd.Email=this.servauth.currentUser.email;
  //  this.nstd.PhoneNumber=this.servauth.currentUser.PhoneNumber;
  
  
    
  }
  edit()
  {
   console.log("dohaaaaaaaaaaaaaa");
   console.log(this.nstd);
    
   this.servauth.edite(this.nstd).subscribe(d => {
     console.log(d);
    //this.nstd = d;
  });
  
  }

}
