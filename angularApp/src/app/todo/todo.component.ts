import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  //DI
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }
  createTodo(){
    let todo={
      id: new Date().getTime(),
      title: `Format the data of firebase`
    }
    this.todoService.create(todo).subscribe((response)=>{
      console.log('todo create', response);
      
    },(error =>{
      console.log(error); 
    }))
  }

}
