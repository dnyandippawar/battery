import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatInputModule} from '@angular/material/input';
import { ForgetComponent } from './forget/forget.component';
import { VerifyComponent } from './verify/verify.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialModule } from './material.module';
import { ChangepasswardComponent } from './changepassward/changepassward.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    AppComponent,
    SignuppageComponent,
    LoginComponent,
    ForgetComponent,
    VerifyComponent,
    ChangepasswardComponent,
    PagesComponent
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,
    MatInputModule,
    AngularFireAuthModule,
    MaterialModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
