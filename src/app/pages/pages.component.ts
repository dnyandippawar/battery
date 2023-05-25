import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { JsonService } from '../json.service';
import { MatSort } from '@angular/material/sort';
import { Element } from '../datatype';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit{
 maxRating = 5;
 maxRatingArr:any = [];
 selectedstar = 0;
 previousselection = 0;
 @ViewChild('dataTable') table!: MatTable<Element>;
  @ViewChild(MatPaginator) paginator ! :MatPaginator;
@ViewChild(MatSort) sort ! :MatSort;

constructor(private service : JsonService ){

}

handlemouseenter(index:number){
this.selectedstar = index + 1;

}
handlemouseleave(){
  if(this.previousselection !== 0){
    this.selectedstar = this.previousselection;
  }
  else{
    this.selectedstar = 0;
  }
}
Rating(index:number){
this.selectedstar = index + 1;
this.previousselection = this.selectedstar;
}


displayedColumns = ['User_Detail', 'Location', 'Battery_Details','Action', 'Rating'];
// dataSource:String[]=[];
// data=[];
ngOnInit():void{
  this.gettable();
  this.maxRatingArr = Array(this.maxRating).fill(0);
}
dataSource:any = MatTableDataSource<Element>;
customerdata:any;

gettable(){
  this.service.gettabledata().subscribe(result =>{
    this.customerdata=result;
    // this.dataSource = ['User_Detail.Name','User_Detail.id', 'Location', 'Battery_Detail.Vehicle_Type', 'Battery_Detail.Battery_Percent', 'Battery_Detail.Battery_id','Action', 'Rating'];
    this.dataSource = new MatTableDataSource<Element >(this.customerdata);

 
  });
 
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    

 
}
button(){
  console.log("button");
}

crossbutton(i:any){
const index  = this.dataSource.data.indexOf(i);

  this.dataSource.data.splice(index , 1);
  // .subscribe(()=>{//
    // console.log("data is deleted successfully");
  // })
  console.log("he is a cross button");
}


}


