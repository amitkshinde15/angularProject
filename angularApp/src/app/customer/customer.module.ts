import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';


@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})  
export class CustomerModule {
  constructor(){
    console.log('customer module log');
    
  }
 }
