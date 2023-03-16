import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/Services/firebase.service';
import {filter, map} from 'rxjs/operators';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  data = [];
  showTable: boolean = false;
  //DI
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
//    //1 2 3 o/p 2, 3, 4
//    const obs = of(1,2,3).pipe(
//     map(x => x + 1)
//    ).subscribe(res => {
//     console.log('obs of', res);
//    })
// //emit (1,2,3,4,5)
//   const source = from([1,2,3,4,5]);
//   // filter out non-even numbers 
//    const example = source.pipe(filter(num => num % 2 === 0));
//   example.subscribe(res => {
//     console.log(`Even number: ${res}`);
//   })
  }
  
  create(){
    this.firebaseService.createPost().subscribe(res =>{
      console.log('Firebase Post', res); 
    })
  }
  
  getData(){ 
    this.showTable = true;
    // this.firebaseService.getPostDataFirebase().subscribe(res =>{
    //   console.log('Firebase get', res);
    //   for (let key in res) {
    //     console.log(key, res[key]);
    //     // this.data.push({ id: key, ...res[key] });
    //     let newObj = Object.assign({}, { id: key }, res[key]);
    //     this.data.push(newObj);
    //   } 
    // })
     // this.firebaseService.getPostDataFirebase().subscribe(res => {
    //   console.log('Firebase get', res);
    // })

    this.firebaseService.getPostDataFirebase().pipe(
      map(responseData => {
        console.log('before manipulate', responseData)
         // empty array 
        const postArray = [];
        // for in loop 
        for(const key in responseData) {
          // check the key 
          if(responseData.hasOwnProperty(key)) {
            // push new value into array 
            postArray.push({...responseData[key], id:key});
          
          }
        }
        this.data = postArray;
        return postArray;
      })
    ).subscribe(res => {
      console.log('after manipulate data', res);
    })
  }
  }



