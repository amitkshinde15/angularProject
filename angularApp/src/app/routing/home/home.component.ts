import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //DI
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
   
  }
  create(){
    this.firebaseService.createPost().subscribe(res =>{
      console.log('Firebase Post', res);
      
    })
  }
  getData(){
    this.firebaseService.getPostDataFirebase().subscribe(res =>{
      console.log('Firebase get', res);
      
    })
  }

}
