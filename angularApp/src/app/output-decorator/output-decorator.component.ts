import { AbstractEmitterVisitor } from '@angular/compiler/src/output/abstract_emitter';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.css']
})
export class OutputDecoratorComponent implements OnInit {
  
  @Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // (fromChild)

  showDetails = false;
  //lastname: string = 'Shinde';
  
  empDetails : any = {
    empId : 11,
    firstName : 'Amit',
    lastName : 'Shinde',
    city : 'Satara'
  }


  constructor() { }

  ngOnInit() {
  }
  
  sendToParent() {
    //this.fromChild.emit(this.lastname);
    this.showDetails=!this.showDetails;
    this.fromChild.emit(this.empDetails);
  }

}
