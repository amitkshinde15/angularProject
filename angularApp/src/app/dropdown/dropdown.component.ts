import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"],
})
export class DropdownComponent implements OnInit {

  country = [
    { id: "1", name: "India" },
    { id: "2", name: "USA" },
  ];

  state: Array<any> = [
    { id: "s1", parentID: "1", name: "Maharashtra" },
    { id: "s2", parentID: "1", name: "Karnataka" },
    { id: "s3", parentID: "1", name: "Gujarat" },
    { id: "s4", parentID: "1", name: "Rajastan" },
    { id: "s5", parentID: "2", name: "Alaska" },
    { id: "s6", parentID: "2", name: "California" }, 
  ];

  stateArray: Array<any> = [];
  
  constructor() {}

  ngOnInit() {}

  changeCountry(val: any) {
    this.stateArray = this.state.filter((c) => c.parentID === val.target.value);
    console.log(this.stateArray);
  }

}
