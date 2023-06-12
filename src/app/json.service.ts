import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { AngularFireAuth , AngularFireAuthModule} from '@angular/fire/compat/auth';
import { Element } from './datatype';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor( private http : HttpClient , private fireauth:AngularFireAuthModule) { }
 

  // url = "http://localhost:3000/users";
 url = "http://localhost:3000/users";
 url1 = "http://localhost:3000/email";
 url2 = "http://localhost:3000/newpass";
 url3 = "http://localhost:3000/otp";
 url4 = "http://localhost:3000/otpget";
 apiurl = "http://localhost:3000/tabledata";
//  rating = "http://localhost:3000/tabledata";
  getdata( ){
      return this.http.get("http://localhost:3000/users");
    
  }
  
  postdata(data:any){
    return this.http.post(this.url , data);
  }
  forgetform(email:any){
    return this.http.post(this.url1, email);
  }

newpassward(newpass:any){
return this.http.post(this.url2, newpass);

}

// otpform(otp:any){
// return this.http.post(this.url3, otp);
// }
otpget(){
  return this.http.get(this.url4);
}

  // logout(){
  //   this.fireauth.signout().then(()=>{
  //     localStorage.removeItem('token');
  //     this.router.navigate('./login')
  //   },err=>{
  //     console.log("error find please check");
  //   });
  // }


  gettabledata():Observable<Element>{
return this.http.get<Element>(this.apiurl);
  }


  postrating(Rating:number){
    return this.http.post(this.apiurl, {Rating});
  
  }

}

