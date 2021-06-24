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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HasRoleDirective } from '_directives/has-role.directive';
import {PasswordModule} from 'primeng/password';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CheckOutComponent } from './CartManagement/check-out/check-out.component';
import { ShippingListResolver } from '_resolvers/ShippingList.resolver';
import { OptionCartListresolver } from '_resolvers/OptionCartList.resolver';
import { AlertService } from '_services/alertifay.service';
//import { CartMangementComponent } from './CartManagement/cart-mangement/cart-mangement.component';
import { OrderDetailsComponent } from './CartManagement/order-details/order-details.component';
import { OrderListResolver } from '_resolvers/OrderList.resolver';
import { OrderDetailsResolver } from '_resolvers/OrderDetails.resolver';
import { OrderListComponent } from './CartManagement/order-list/order-list.component';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';

import {TableModule} from 'primeng/table';
import { ManageAccountComponent } from './Marketing/manage-account/manage-account.component';
import { ProductExploreModule } from './product-explore/product-explore.module';
import { PaymentComponent } from './payment/payment.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserListComponent } from './crudUser/user-list/user-list.component';
import { UserDetailsComponent } from './crudUser/user-details/user-details.component';
import { FollowOrdersComponent } from './Marketing/follow-orders/follow-orders.component';
import { DeleteUserComponent } from './crudUser/delete-user/delete-user.component';
import { EditeUserComponent } from './crudUser/edite-user/edite-user.component';
import { SupplierDetailsComponent } from './crudUser/supplier-details/supplier-details.component';

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
    HomePageComponent,
    HasRoleDirective,
    CheckOutComponent,
    OrderDetailsComponent,
    OrderListComponent,
    SupplierOrdersComponent,
    ManageAccountComponent,
    PaymentComponent,
    AdminDashboardComponent,
    UserListComponent,
    UserDetailsComponent,
    FollowOrdersComponent,
    DeleteUserComponent,
    EditeUserComponent,
    SupplierDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PasswordModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ProductExploreModule,
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
    ,ShippingListResolver
    ,OptionCartListresolver,
    AlertService,
    OrderListResolver,
    OrderDetailsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
