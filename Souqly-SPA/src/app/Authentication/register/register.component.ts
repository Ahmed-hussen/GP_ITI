import { AuthServicesService } from './../../../../_services/AuthServices.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '_models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  errorMsg="";
  constructor(private fp: FormBuilder, private authService: AuthServicesService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  register() {

    if(this.registerForm.valid){
      this.user=Object.assign({},this.registerForm.value);
      
      this.authService.register(this.user).subscribe(
        ()=>{
          this.router.navigate(['/login']);
        },  (error) => {
          this.errorMsg=error.error;

        }
      )
    }

  }


  createRegisterForm() {
    this.registerForm = this.fp.group({
      roleName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],

    })
  }


}
