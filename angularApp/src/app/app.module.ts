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
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    DirectiveAssignmentComponent,
    CustomDirective,
    TemplateformComponent,
    CustomdirectiveComponent,
    ReactiveformComponent,
    TemplateformAssignmentComponent,
    ReactiveformAssignmentComponent,
    RegestrationFormComponent,
    FormsComponent
    
  ],
  imports: [
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
