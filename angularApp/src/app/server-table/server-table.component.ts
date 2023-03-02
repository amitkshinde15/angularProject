import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {
  
  users;
 
  constructor(private demoService : DemoService) { }

  ngOnInit(): void {
    this.demoService.getUsers().subscribe(res => {
      console.log('user api results', res);
      this.users = res;
   
    }, err => {
      console.log(err);
    });
  }
  
  
}
