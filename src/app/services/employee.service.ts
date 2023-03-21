import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = 'http://localhost:3000/posts';

  constructor(private http : HttpClient) { }

  getEmployees(){
    return this.http.get<Employee[]>(this.baseURL);
  }

  postEmployee(employee : Employee){
    return this.http.post<Employee>(this.baseURL ,  employee);
  }

  deleteEmployee(id:string){
    return this.http.delete(this.baseURL +'/' + id);

  }
}
