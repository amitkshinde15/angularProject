import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { FashionComponent } from './fashion/fashion.component';
import { MenswearComponent } from './fashion/menswear/menswear.component';
import { WomenswearComponent } from './fashion/womenswear/womenswear.component';
import { HooksComponent } from './hooks/hooks.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ResolveGuard } from './resolve.guard';
import { AboutusComponent } from './routing/aboutus/aboutus.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { HomeComponent } from './routing/home/home.component';
import { PagenotfoundComponent } from './routing/pagenotfound/pagenotfound.component';
import { CameraComponent } from './routing/product/camera/camera.component';
import { LaptopComponent } from './routing/product/laptop/laptop.component';
import { MobileComponent } from './routing/product/mobile/mobile.component';
import { ProductComponent } from './routing/product/product.component';
import { WatchComponent } from './routing/product/watch/watch.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ServerTableComponent } from './server-table/server-table.component';
import { ServertabledetailsComponent } from './servertabledetails/servertabledetails.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { TodoComponent } from './todo/todo.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WikiComponent } from './wiki/wiki.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
 // { path: 'product', 
  { path: 'product', canActivate: [AuthGuard], component: ProductComponent,
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
  {path: 'userdetails', component: UserdetailsComponent, resolve: {
    data: ResolveGuard
  }},
 // {path: 'login', component: LoginformComponent}, 
  //{path: 'login', component: TemplateformComponent},
  {path: 'login', component: ReactiveformComponent},
  {path:'order', component: OrderlistComponent},
  {path:'fashion',
  children:[
    {path: '', component: FashionComponent},
    { path: 'mens', component: MenswearComponent },
    { path: 'womens', component: WomenswearComponent}
  ]},
  {path: 'todo', component:TodoComponent},
  {path: 'wiki', component: WikiComponent},
  {path: 'hook', component: HooksComponent},
  { path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'adduser', component: AdduserComponent, canDeactivate: [UnsavedchangesGuard]},
  {path: 'rxjs', component: RxjsComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
