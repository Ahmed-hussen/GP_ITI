import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserForManage } from 'src/app/Dtos/UserForManage';
import { MarketingService } from '_services/marketing-service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

  constructor(private marketingservice: MarketingService, private router : Router) { }
  userData : UserForManage;
  ngOnInit(): void {
    this.marketingservice.getAllData().subscribe(d =>{
     // alert(d);
     console.log("user",d);
      this.userData = d;
    });
  }

  Update(){
    this.marketingservice.updateAllData(this.userData).subscribe(n=>{
    console.log(n);
    alert("تم تعديل البيــانات بنجاح");
    this.router.navigateByUrl(" ");
    });
  }

  Cancel(){
    this.router.navigateByUrl(" ");
  }

}
