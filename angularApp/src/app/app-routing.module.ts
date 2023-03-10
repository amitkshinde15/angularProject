import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { AboutusComponent } from './routing/aboutus/aboutus.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { HomeComponent } from './routing/home/home.component';
import { PagenotfoundComponent } from './routing/pagenotfound/pagenotfound.component';
import { CameraComponent } from './routing/product/camera/camera.component';
import { LaptopComponent } from './routing/product/laptop/laptop.component';
import { MobileComponent } from './routing/product/mobile/mobile.component';
import { ProductComponent } from './routing/product/product.component';
import { WatchComponent } from './routing/product/watch/watch.component';
import { ServerTableComponent } from './server-table/server-table.component';
import { ServertabledetailsComponent } from './servertabledetails/servertabledetails.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
 // { path: 'product', 
  { path: 'product', component: ProductComponent,
    children: [
   // { path: '', component: ProductComponent}, This code is for single router
    { path: 'laptop', component: LaptopComponent },
    { path: 'camera', component: CameraComponent },
    { path: 'mobile', component: MobileComponent },
    { path: 'watch', component: WatchComponent }
  ]},
  {path:'post', component: DemopostComponent},
  {path: 'postdetails/:id', component: DemopostdetailsComponent},
  {path:'user', component: ServerTableComponent},
  {path: 'userdetails/:id', component: ServertabledetailsComponent},
  {path: 'userdetails', component: UserdetailsComponent},
  {path: 'login', component: TemplateformComponent},
  {path:'order', component: OrderlistComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
