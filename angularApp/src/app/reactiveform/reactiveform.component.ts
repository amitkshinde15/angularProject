import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'username' : new FormControl(null),
      'email': new FormControl(null)
    });
  }

  OnSubmit() {
    alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm.value)
  }
                                      
}
