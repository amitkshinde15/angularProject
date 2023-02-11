import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
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
    DirectiveAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
