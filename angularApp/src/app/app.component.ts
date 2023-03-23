import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Employee } from './model/employee';
import { RapidapiService } from './Services/rapidapi.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObservable : any;
  destroyElement:boolean = true;
  data1: string ='red';
  changeFromParent(){
    this.data1 +=1;
  }
  test = 'Used property binding using div tag';
  title = 'angularApp';
  name = 'Amit';
  empCount;
  date;
  parentToChild: string = "I am coming from parent ";

  posts = [
    {
      title: 'Pam Tree',
      content: 'I love this tree'
    },
    {
      title: 'Mango Tree',
      content: 'I love this tree'
    }
  ]	
  
  data = {
    name : 'Codeminde',
    dept : 'Technology'
  }
  constructor(private rapidService: RapidapiService){
    this.getValueFromServer();
    this.getCurrentDate();  
  }
  ngOnInit():void{
    this.myObservable = of('This is custom observable').pipe(delay(3000));

    // this.rapidService.getFinance().subscribe(res=>{
    //   console.log('rapid res', res);  
    // })
  }
  getValueFromServer(){
    this.empCount = 100000;  
  }
  //imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  getCurrentDate(){
    this.date = Date();
  }
 
  onParent(val : Employee) {
      console.log('Employee details', val);
    
  }
  handleData(value){
    this.data1 = value.target.value;
  }

  destroy(){
    this.destroyElement=false;
  }
}

