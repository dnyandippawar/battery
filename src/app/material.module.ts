import { NgModule } from "@angular/core";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import { MatIconModule} from "@angular/material/icon";

@NgModule({
    exports:[
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
       MatIconModule
    
    ]
})
export class MaterialModule{

}