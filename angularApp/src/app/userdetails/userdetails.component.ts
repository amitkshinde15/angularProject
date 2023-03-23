import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
  users: any;
  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    
    this.users = this.activateRoute.snapshot.data['data'];
    console.log('Resolve data before route',this.users);
    
  }

}
