import { AuthServicesService } from './../../../_services/AuthServices.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navebare',
  templateUrl: './navebare.component.html',
  styleUrls: ['./navebare.component.css']
})
export class NavebareComponent implements OnInit {

  constructor(public authService: AuthServicesService, private router: Router) { }
  ngOnInit(): void {

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
}
