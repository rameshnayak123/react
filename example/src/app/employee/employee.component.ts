import { Component } from '@angular/core';
import { Employee } from './employeeClass';
import { empdata } from './employeeData';
@Component({

    selector:"employee",
    templateUrl:'./employee.component.html',
    styleUrls:[]
})

export class EmployeeComponent{

    mystyles={
    'borderCollapse':'Collapse'
    };

    empList:Employee[]=empdata;

    public delete(index:number):void
    {
        this.empList.splice(index,1);
    }

}