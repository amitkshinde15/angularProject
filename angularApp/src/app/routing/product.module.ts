import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { WatchComponent } from './product/watch/watch.component';
import { RouterModule } from '@angular/router';
import { UtilityModule } from '../shared/utility/utility.module';





@NgModule({
  declarations: [
    ProductComponent,
    CameraComponent,
    LaptopComponent,
    WatchComponent,
    MobileComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilityModule
  ] 
})
export class ProductModule { }
