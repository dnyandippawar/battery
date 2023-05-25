import { Component, ErrorHandler, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';
import { JsonService } from '../json.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private service: JsonService , private router:Router) {

    this.service.getdata().subscribe(res => {
      try {
        this.res = res;
        // Code that might throw an error
      } catch (error) {
        // Handle the error here
        console.error('An error occurred:', error);
      }
    })     
  }

  ngOnInit(): void {
  }
  res: any;
  data: any;
  name: any;
  passward: any;
  loginform(data: any) {
    // this.data = 
  
    const matchuser = this.res.find((m:any)=> m.name == data.name &&  m.passward == data.passward);
    if (matchuser != undefined) {
      alert("user login successfully");
      this.router.navigate(["/pages"]);
    } 
   else{
      alert("user not exist");
    }

    //  if( this.res.find((m:any)=> m.name == data.name &&  m.passward == data.passward)){
    //   alert("user login successfully");
    //  }else{
    //   alert("user not exist");
    //  }

  }
  
}
(error: HttpErrorResponse) => {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('some error occured please check bellow:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code, database is not found ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
};
 

