import { UploadProductDataComponent } from './SupplierProducts/AddProductData/uploadProductData/uploadProductData.component';
import { UploadProductImagesComponent } from './SupplierProducts/Upload-Images/uploadProductImages/uploadProductImages.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ProductListComponent } from './ManageProduct/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierOrdersComponent } from './supplier-orders/supplier-orders.component';
import { ManageAccountComponent } from './Marketing/manage-account/manage-account.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'myorders', component: SupplierOrdersComponent},
  {path: 'manageaccount', component: ManageAccountComponent},
  {path: 'uploadproduct', component: UploadProductDataComponent},

  { path: '**', redirectTo :'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
