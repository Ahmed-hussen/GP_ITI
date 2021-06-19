import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '_models/user';
import { AuthServicesService } from '_services/AuthServices.service';

@Component({
  selector: 'app-register-shipping',
  templateUrl: './register-shipping.component.html',
  styleUrls: ['./register-shipping.component.css']
})
export class RegisterShippingComponent implements OnInit {

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
          this.router.navigate(['/dashboard']);
        },  (error) => {
          this.errorMsg=error.error;

        }
      )
    }

  }


  createRegisterForm() {
    this.registerForm = this.fp.group({
      roleName: ['Shipping', Validators.required],
      userName: ['', Validators.required],
      FirstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      phoneNumber: ['', [Validators.pattern("^[0-9]*$"), Validators.minLength(11), Validators.maxLength(11)]],
    })
  }

}
