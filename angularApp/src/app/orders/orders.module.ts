import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { UtilityModule } from '../shared/utility/utility.module';




@NgModule({
  declarations: [
    OrderlistComponent,
    
  ],
  imports: [
    CommonModule,
    UtilityModule
  ]
})
export class OrdersModule { }
