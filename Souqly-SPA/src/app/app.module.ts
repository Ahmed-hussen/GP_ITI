import { UploadProductDataComponent } from './SupplierProducts/AddProductData/uploadProductData/uploadProductData.component';
import { UploadProductImagesComponent } from './SupplierProducts/Upload-Images/uploadProductImages/uploadProductImages.component';
import { AuthServicesService } from './../../_services/AuthServices.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';
import { FileUploadModule} from 'ng2-file-upload';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavebareComponent } from './navebare/navebare.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './Authentication/login/login.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { ProductListComponent } from './ManageProduct/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HasRoleDirective } from '_directives/has-role.directive';
import {PasswordModule} from 'primeng/password';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';


import {TableModule} from 'primeng/table';
import { ManageAccountComponent } from './Marketing/manage-account/manage-account.component';




export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavebareComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    HomePageComponent,
    HasRoleDirective,
    SupplierOrdersComponent,
    ManageAccountComponent,
    UploadProductImagesComponent,
    UploadProductDataComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    PasswordModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CommonModule,
    DropdownModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000'],
        disallowedRoutes: ['localhost:5000/auth']// login -
      }
    })
  ],
  providers: [

    AuthServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
