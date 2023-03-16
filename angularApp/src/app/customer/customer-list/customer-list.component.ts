import { Component, OnInit } from '@angular/core';

import { RapidapiService } from 'src/app/Services/rapidapi.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  resObj= {}; 
  //DI
  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {

    this.rapidapiService.getFinance().subscribe(res=>{
      console.log('user api result', res);
      this.resObj= res;
    })
  }
  
}
