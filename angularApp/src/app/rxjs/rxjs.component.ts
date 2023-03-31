import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { forkJoin, from, interval, of, timer } from 'rxjs';
import { mergeMap, take, takeLast, takeUntil } from 'rxjs/operators';

interface User {
  id: number;
  }  
interface Post {
  id: number;
}

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})

export class RxjsComponent implements OnInit {

  USERS = 'https://jsonplaceholder.typicode.com/users';
  POSTS = 'https://jsonplaceholder.typicode.com/posts';

  data: [User[], Post[]];

  constructor(http: HttpClient) { 
    const users = http.get<User[]>(this.USERS);
    const posts = http.get<Post[]>(this.POSTS);
 
    forkJoin([users, posts]).subscribe( res => {
     this.data = res;
     console.log('User and Posts data', res);
    })
  }
  
  getData(data) {
    return of(data + ' Video uploaded');
   }

   ngOnInit() {

    const obs1 = from(['Tech', 'Comedy', 'News']);
    // obs1.pipe(
    //   map(res => this.getData(res))
    // ).subscribe(res => res.subscribe(res2 => {
    //   console.log(res2);
    // }));
    //or below both works same
    obs1.pipe(
      mergeMap(res => this.getData(res))
    ).subscribe(res => {
      console.log(res);
    })
   
    // of and from example 
    // const ofobs = of([1,2,3]);
    // ofobs.subscribe(res => {
    //   console.log('of example', res);
    // });
    // const fromObs = from([1,2,3]);
    // fromObs.subscribe(res => {
    //   console.log('from example', res);
    // });

    // Take operator 
//  const source = interval(1000);
//  source.pipe(
//   take(5)
//  ).subscribe(res => {
//   console.log('take operator', res)
//  })

 // take last 
// let randomNames = ['Dnyanesh', 'Codemind', 'Angular', 'HTML', 'Javascript', 'Typescript'];
// const results = from(randomNames);
// results.pipe(
//   takeLast(2)
// ).subscribe(res => {
//   console.log('takeLast example', res);
// })

// takeUntil 
// const custObs = interval(1000);
// let condition = timer(6000);
// custObs.pipe(
//   takeUntil(condition)
// ).subscribe(res => {
//   console.log('takeUntil', res)
// })
  }
}
