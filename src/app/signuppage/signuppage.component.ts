import { Component } from '@angular/core';
import { JsonService } from '../json.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent {

  title = 'signup';
  constructor(private serve: JsonService) { }
  signupform(data: any) {
    
this.serve.postdata(data).subscribe(res=>{
  alert("successfully inset");
})
   
  }

}

