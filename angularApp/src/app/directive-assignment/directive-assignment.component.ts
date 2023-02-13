import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-assignment',
  templateUrl: './directive-assignment.component.html',
  styleUrls: ['./directive-assignment.component.css']
})
export class DirectiveAssignmentComponent implements OnInit {
  toggleDetails = false;
  logClicks = [];
  clickCount = 0;
 
  toggle = true;
  status = 'btn btn-primary'; 


  constructor() { }

  ngOnInit() {
  }
  onDisplayDetailsClick() {
    this.clickCount++;
    this.toggleDetails = !this.toggleDetails;
    this.logClicks.push({count: this.clickCount, time: new Date()});
  }

  getBackgroundColor(count) {
    if(count >= 4)
    {
      return 'blue';
    }
  }
  enableDisableRule() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'btn btn-primary' : 'btn btn-danger';
}
}
