import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionComponent } from './fashion.component';
import { MenswearComponent } from './menswear/menswear.component';
import { WomenswearComponent } from './womenswear/womenswear.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    FashionComponent,
    MenswearComponent,
    WomenswearComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class FashionModule { }
