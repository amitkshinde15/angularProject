import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform-assignment',
  templateUrl: './reactiveform-assignment.component.html',
  styleUrls: ['./reactiveform-assignment.component.css']
})
export class ReactiveformAssignmentComponent implements OnInit {
  isSubmitted:boolean = false;
  myReactiveForm: FormGroup;
  minDate = new Date(); 
  maxDate = new Date(2024, 1 , 27);  
  subScription = ['Basic','Advanced','Pro']; 
  
  constructor() { 
    this.createForm();
  }
  

  createForm()
  {
    this.myReactiveForm = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'subScription': new FormControl('Advanced'),
            'password' : new FormControl('', [Validators.required]),
            'date' : new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
   }

   onSubmit(){
    this.isSubmitted = true;
    console.log('My Form', this.myReactiveForm.value);
    this.myReactiveForm.controls['email'].markAsTouched();
    this.myReactiveForm.controls['password'].markAsTouched();
    this.myReactiveForm.controls['date'].markAsTouched();
    
   }
}
