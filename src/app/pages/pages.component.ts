import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { JsonService } from '../json.service';
import { MatSort } from '@angular/material/sort';
import { Element } from '../datatype';
import { HttpErrorResponse } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';



@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  maxRating = 5;
  maxRatingArr:number[] = [1,2,3,4,5];
  selectedstar = 0;
  ratingdata:any ='';
  previousselection:number = this.ratingdata;
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ['User_Detail', 'Location', 'Battery_Details','id','Rating'];
  dataSource: MatTableDataSource<Element>;
data:any[]= [];
stars: boolean[] = [];
  constructor(private service: JsonService) {
    this.dataSource = new MatTableDataSource<Element>([]);
  }
  ngOnInit() {
    this.maxRatingArr = Array(this.maxRating).fill(0);
    this.gettable();

    // this.service.gettabledata().subscribe((result) => {
    //   this.ratingdata = result;
      
        // });
  }

  gettable() {
    this.service.gettabledata().subscribe((result: any) => {
      this.data = result;
      this.dataSource.data = this.data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      // (error: HttpErrorResponse) => {
      //   console.log("An error occurred:", error);
      // }
    );
  }

  button() {
    console.log("button");
  }

  crossbutton(row: any): void {
    // Remove the row from the dataSource data array
    const index = this.dataSource.data.indexOf(row);
    
    this.dataSource.data = this.dataSource.data.slice(0, index).concat(this.dataSource.data.slice(index + 1));
 
  }
  
HandleMouseEnter(index:number){
  this.selectedstar = index+1;
}
HandleMouseLeave(){
  if(this.previousselection!==0)
  {
    this.selectedstar = this.previousselection;
  }
  else{
    this.selectedstar = 0;
  }
}

 Rating(index:number ){
  
this.selectedstar = index + 1 ;

this.previousselection = this.selectedstar;
this.service.postrating(this.previousselection).subscribe(()=>{
console.log("rating is successfully updated");

 }),(error:any) => {
  console.error('Error saving data:', error);
}

 }

}
