import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { CardComponent } from './card/card.component';
import { OutputDecoratorComponent } from './output-decorator/output-decorator.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgforDropdownComponent } from './ngfor-dropdown/ngfor-dropdown.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgifComponent } from './ngif/ngif.component';
import { Ngswitch2Component } from './ngswitch2/ngswitch2.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { DirectiveAssignmentComponent } from './directive-assignment/directive-assignment.component';
//import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material module
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { CustomdirectiveComponent } from './customdirective/customdirective.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateformAssignmentComponent } from './templateform-assignment/templateform-assignment.component';
import { ReactiveformAssignmentComponent } from './reactiveform-assignment/reactiveform-assignment.component';
import { RegestrationFormComponent } from './hiteshRegestration-form/regestration-form.component';
import { FormsComponent } from './forms/forms.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ServerTableComponent } from './server-table/server-table.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProdcutFilterComponent } from './prodcut-filter/prodcut-filter.component';
import { Comp1Component } from './fourcompfolder/comp1/comp1.component';
import { Comp2Component } from './fourcompfolder/comp2/comp2.component';
import { Comp3Component } from './fourcompfolder/comp3/comp3.component';
import { Comp4Component } from './fourcompfolder/comp4/comp4.component';
import { UtilityService } from './Services/utility.service';
import { AboutusComponent } from './routing/aboutus/aboutus.component';
import { ContactusComponent } from './routing/contactus/contactus.component';
import { HomeComponent } from './routing/home/home.component';

import { PagenotfoundComponent } from './routing/pagenotfound/pagenotfound.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './routing/product.module';
import { OrdersModule } from './orders/orders.module';
import { ServertabledetailsComponent } from './servertabledetails/servertabledetails.component';
import { FashionModule } from './fashion/fashion.module';
import { CustomerModule } from './customer/customer.module';
import { AdminModule } from './admin/admin.module';
import { TodoComponent } from './todo/todo.component';
import { LoginformComponent } from './loginform/loginform.component';
import { HooksComponent } from './hooks/hooks.component';
import { WikiComponent } from './wiki/wiki.component';
import { AdduserComponent } from './adduser/adduser.component';


@NgModule({
  declarations: [
    // component, customDirective, custom pipe.
    AppComponent,
    DemoComponent,
    Test1Component,
    Test2Component,
    CardComponent,
    OutputDecoratorComponent,
    NgforComponent,
    NgforDropdownComponent,
    NgswitchComponent,
    DropdownComponent,
    NgifComponent,
    Ngswitch2Component,
    NgstyleComponent,
    NgclassComponent,
    DirectiveAssignmentComponent,
   // CustomDirective,
    TemplateformComponent,
    CustomdirectiveComponent,
    ReactiveformComponent,
    TemplateformAssignmentComponent,
    ReactiveformAssignmentComponent,
    RegestrationFormComponent,
    FormsComponent,
    ServerTableComponent,
    PipeexampleComponent,
    CustomPipe,
    SearchPipe,
    ProdcutFilterComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    PagenotfoundComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserdetailsComponent,
    ServertabledetailsComponent,
    TodoComponent,
    LoginformComponent,
    HooksComponent,
    WikiComponent,
    AdduserComponent
    
  ],
  imports: [
    // any module are using then we need to import here
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule,
    OrdersModule,
    FashionModule,
    HttpClientJsonpModule
   
  ],
  providers: [], //Services
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App module log');
    
  }
 }
