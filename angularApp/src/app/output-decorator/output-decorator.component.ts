import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
  employeeDetails : Employee;
  @Output() fromChild : EventEmitter<Employee> = new EventEmitter<Employee>(); // (fromChild)

  showDetails = false;
  //lastname: string = 'Shinde';
  constructor() { }

  ngOnInit() {
  }
  
  sendToParent() {
    //this.fromChild.emit(this.lastname);
    this.showDetails=!this.showDetails;
    this.employeeDetails = new Employee();
    this.employeeDetails.empId = '11';
    this.employeeDetails.firstName = 'Amit';
    this.employeeDetails.lastName = 'Shinde';
    this.employeeDetails.city = 'Satara';
    this.fromChild.emit(this.employeeDetails);
  }

}
