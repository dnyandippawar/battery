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
import { SHA256 } from 'crypto-js';
import { MaterialModule } from './material.module';
// Import the required functions and modules from uuid
import { v4 as uuidv4 } from 'uuid';
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
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
