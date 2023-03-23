import { createViewChild } from '@angular/compiler/src/core';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DemoService } from '../Services/demo.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
AfterContentChecked,AfterViewInit,AfterViewChecked, OnDestroy
{
  subscription: Subscription;
  counter;
  num: number = 1;
  
  @Input() parentData: string;
  @ContentChild("child", {static: false}) contentChild: ElementRef;
  @ViewChild("childhook", {static: false}) viewChild: ElementRef;

  constructor(private demoService : DemoService) { 
    console.log('HooksComponent Construcor called');   
  }
  ngOnDestroy(): void {
    console.log('HooksComponent ngOnDestroy called');
    clearInterval(this.counter);
    this.subscription.unsubscribe();
  }
  ngAfterContentChecked(): void {
    console.log('HooksComponent ngAfterContentChecked called', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }
  ngAfterContentInit(): void { //This method will call only once if we want to change use above method
    console.log('HooksComponent ngAfterContentInit called', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color: ${this.parentData}`)
  }

  ngAfterViewChecked(): void {
    console.log('HooksComponent ngAfterViewChecked called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }

  ngAfterViewInit(): void { // It will call once
    console.log('HooksComponent ngAfterViewInit called', this.viewChild);
    this.viewChild.nativeElement.setAttribute('style', `color: ${this.parentData}`);
  }
  ngDoCheck(): void {
    console.log('HooksComponent ngDoCheck called');
  }

  ngOnInit() {
    console.log('HooksComponent ngOnInit called');

    this.subscription = this.demoService.getUsers().subscribe(res => {
      console.log('users from hooks component', res);
     });
    // this.counter = setInterval(() => {
    // this.num = this.num + 1;
    // console.log(this.num);
    //  }, 1000)
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('HooksComponent ngOnChanges called', changes);
    for (const propname in changes) {
        const prop = changes[propname];  //parentData
        console.log(prop);

        const { previousValue, currentValue, firstChange} = prop;

        console.log(`Prop name ${propname}`);
        console.log(`Prev value ${previousValue}`);
        console.log(`Current value ${currentValue}`);
        console.log(`First value ${firstChange}`);
        console.log("-------------------");
        
               
    }  
  }
  
}
