import { Component, OnInit } from '@angular/core';
import { UserForManage } from 'src/app/Dtos/UserForManage';
import { MarketingService } from '_services/marketing-service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  constructor(private marketingservice: MarketingService) { }
  userData : UserForManage;
  ngOnInit(): void {
    this.marketingservice.getAllData().subscribe(d =>{
     // alert(d);
     console.log("user",d);
      this.userData = d;
    });
  }


}
