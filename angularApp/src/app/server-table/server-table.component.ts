import { Component, OnInit } from '@angular/core';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-server-table',
  templateUrl: './server-table.component.html',
  styleUrls: ['./server-table.component.css']
})
export class ServerTableComponent implements OnInit {
  
  users;
  searchText: string = '';
 
  constructor(private demoService : DemoService) { }

  ngOnInit(): void {
    this.demoService.getUsers().subscribe(res => {
      console.log('user api results', res);
      this.users = res;
       
      // for (let user of this.users) {
      //   console.log(user.address.street);
      // }
    }, err => {
      console.log(err);
    });
  }

  //This method we write for search name declare this event in html
  // searchUsers() {
  //   if (this.searchText.trim() !== '') { // check if search input is not empty
  //     this.users = this.users.filter(user => {
  //       return user.name.toLowerCase().includes(this.searchText.toLowerCase());
  //     });
  //   } else {
  //     this.demoService.getUsers().subscribe(res => {
  //       console.log('user api results', res);
  //       this.users = res;
  //     }, err => {
  //       console.log(err);
  //     });
  //   }
  // }
  
}
