import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  url = 'https://angular8-82bf4-default-rtdb.firebaseio.com/';
  //DI
  constructor(private httpclient: HttpClient) { }

  createPost() {
    let postData = {
      title: 'This is firebase example',
      content: 'We are calling angular post method'
    }
    return this.httpclient.post(this.url + 'posts.json', postData);
  }
  getPostDataFirebase(){
    return this.httpclient.get(this.url + 'posts.json');
  }
}
