import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";



@NgModule({

    declarations:[EmployeeComponent],
    imports:[BrowserModule,FormsModule,CommonModule],
    exports:[EmployeeComponent],
    




})

export class EmployeeModule{

}