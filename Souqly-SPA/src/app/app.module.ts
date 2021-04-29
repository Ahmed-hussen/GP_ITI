import { AuthServicesService } from './../../_services/AuthServices.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JwtModule } from '@auth0/angular-jwt';

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
    HasRoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

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
