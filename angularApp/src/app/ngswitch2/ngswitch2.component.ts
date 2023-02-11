import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch2',
  templateUrl: './ngswitch2.component.html',
  styleUrls: ['./ngswitch2.component.css']
})
export class Ngswitch2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getProductValue(val) {
    console.log('seleced value from dropdown', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue;
  }
selectedProduct: string;
}
