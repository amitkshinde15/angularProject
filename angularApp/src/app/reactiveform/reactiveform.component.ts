import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  isSubmitted:boolean = false;
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }
  courses =['Angular','HTML','CSS']

  ngOnInit() {
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDeatils': new FormGroup({
      'username' : new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'course': new FormControl('Angular')
    });
  }

  OnSubmit() {
    this.isSubmitted=true;
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
                                      
}
