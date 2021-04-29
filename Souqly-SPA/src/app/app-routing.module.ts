import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './Authentication/register/register.component';
import { LoginComponent } from './Authentication/login/login.component';
import { ProductListComponent } from './ManageProduct/product-list/product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},



  { path: '**', redirectTo :'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
