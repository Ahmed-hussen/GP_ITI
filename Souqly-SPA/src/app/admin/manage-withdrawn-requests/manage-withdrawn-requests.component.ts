import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserForWithdrawRequest } from '_models/ola/UserForWithdrawRequest';
import { AdminServiceService } from '_services/admin-service.service';

@Component({
  selector: 'app-manage-withdrawn-requests',
  templateUrl: './manage-withdrawn-requests.component.html',
  styleUrls: ['./manage-withdrawn-requests.component.css'],
  providers: [MessageService]
})
export class ManageWithdrawnRequestsComponent implements OnInit {

  requests:UserForWithdrawRequest[];
  notConfirmedRequests:UserForWithdrawRequest[]=[];
  confirmedRequests:UserForWithdrawRequest[]=[];
  displayedTable:string = "nonConfirmed";
  returnedReq:UserForWithdrawRequest;
  index:number;

  cols:any[];
  options:string[] = [
    "confirmed",
    "nonConfirmed",
    "all"
  ]
  reqId:number;
  constructor(private adminService:AdminServiceService, private router:Router, private messageService: MessageService) { }

  ngOnInit(): void {
    this.adminService.getWithdrawRequests().subscribe(
      d => {
        this.requests = d;
        d.forEach(x => x.confirmed? this.confirmedRequests.push(x): this.notConfirmedRequests.push(x)); 
       
      } 
    );
      
    this.cols = [
      { field: 'fullName', header: 'اسم العميل' },
      { field: 'userRole', header: 'الوظيفة' },
      { field: 'money', header: 'المبلغ المراد سحبه' }, 
    ];
  }

  showDetails(userName:string){
    var user = this.requests.find(r => r.userName == userName);
    
    this.router.navigateByUrl('/userdata', { state: user });
  }

  showConfirm(reqId:number){
    this.index = this.notConfirmedRequests.findIndex(x => x.requestId == reqId);
    this.returnedReq = this.notConfirmedRequests[this.index];

    this.reqId = reqId;
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'هل انت متأكد', detail:'قم بالتأكيد للمتابعة'});
  }

  onConfirm(){
    this.notConfirmedRequests.splice(this.index, 1);
    this.returnedReq.confirmed = true;
    this.confirmedRequests.push(this.returnedReq);
    var i = this.requests.findIndex(r => r.requestId == this.returnedReq.requestId);
    this.requests[i].confirmed = true;

    this.adminService.confirmWithdrawRequests(this.reqId).subscribe(_ => null, _ =>{
      this.returnedReq.confirmed = false;
      this.notConfirmedRequests.push(this.returnedReq);
      this.confirmedRequests.pop();
      this.requests[i].confirmed = false;
      alert("not confirmed, please try again");
    });
    this.messageService.clear('c');
  }

  onReject(){
    this.messageService.clear('c');
  }
}
