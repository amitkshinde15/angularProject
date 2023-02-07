import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  constructor(){
    this.getValueFromServer();
    this.getCurrentDate();
  
  }
  getValueFromServer(){
    this.empCount = 100000;
    
    
  }
  //imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  getCurrentDate(){
    this.date = Date();
  }

}

