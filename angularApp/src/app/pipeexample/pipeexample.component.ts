import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  todayDate = new Date();
 
  price: number = 70000;

  countLenght: number = 500;
  
  employee = {
    empid: '1',
    empname: 'Jack'
  }
  constructor() { }

  ngOnInit() {
    console.log(this.todayDate);
    
  }

}
