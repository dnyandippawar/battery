import { Component } from '@angular/core';
import { JsonService } from '../json.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';
import { enc, SHA256 } from 'crypto-js';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {

  emailotp:any;
  token:any;
  email:string = "";
  newPassword:any;
  getotp:any;
  wrongotp:any;
  a1:Boolean = true;
  a2:Boolean = false;
  constructor(private service: JsonService , private router :Router){
   
  }

  OTPform(otp:any) {
//  this.service.otpform(otp);
 this.service.otpget().subscribe(res => {
this.getotp =res;

  if( this.getotp == otp.otp){
 this.router.navigate(["/changepassward"]);
 console.log("correct otp" , res);
}else{
this.wrongotp = "you enter wrong otp, please enter correct OTP";
console.log("wrong otp",this.getotp, otp.otp);
}  
});
}


emailform(email:any) {
   this.service.forgetform(email).subscribe( res=>{
  alert("OTP send your email , please check now");
 this.a1 = false;
 this.a2 = true;  
})
 
}



ngOnInit():void{
  
}
}
