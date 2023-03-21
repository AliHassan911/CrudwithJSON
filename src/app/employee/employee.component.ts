import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  birhtday:any
  @Input() employee : Employee | any;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();


  constructor(private emplyeeservice:EmployeeService){
    
    this.employee = {
      firstname : '',
      lastname : '',
      gender : '',
      birthdate: '',
      education:'',
      company:'',
      jobExperience:0,
      salary:0,
      profile:'',
    }
  }
  ngOnInit(): void {
   this.emplyeeservice.getEmployees().subscribe((res:any)=>{
       console.log(res[0].birthday
         , "this is res")
        // this.birhtday = res[0].birthday
        console.log(res[0].profile,"this is birthdaays")
        this.birhtday = res[0].profile
    })
    console.log(this.employee);
  }

  deleteEmployeeClicked(){
    this.onRemoveEmployee.emit(this.employee.id);
  }

   editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
   }


}
