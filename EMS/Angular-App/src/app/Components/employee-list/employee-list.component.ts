import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/EmpolyeeClass/employee';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!:Employee[]
  constructor(private employeeService:EmployeeServiceService,private router:Router) { }

  ngOnInit(): void {
  this.getEmployeeList();
  }
  private getEmployeeList()
  {
  this.employeeService.getEmployeesList().subscribe(data=>{
  this.employees=data;
  },error=>console.log(error));
  }
  employeeDetails(id:number)
  {
  this.router.navigate(['employee-details',id]);
  }
  url="./assets/details.png";

}
