import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { ForgetComponent } from './forget/forget.component';
import { VerifyComponent } from './verify/verify.component';
import { ChangepasswardComponent } from './changepassward/changepassward.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:"signuppage", component:SignuppageComponent},
  {path:"login", component:LoginComponent},
  {path:"forget",component:ForgetComponent},
  {path:"verify", component:VerifyComponent},
  {path:"changepassward",component:ChangepasswardComponent},
  {path:"pages",component:PagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
