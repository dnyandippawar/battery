import { Component } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-changepassward',
  templateUrl: './changepassward.component.html',
  styleUrls: ['./changepassward.component.css']
})
export class ChangepasswardComponent {

constructor(private service:JsonService){}

// newpassward:any;

passwardform(newpass:any){
this.service.newpassward(newpass).subscribe(res=>{
  alert("passward reset successful");
});

}

}
