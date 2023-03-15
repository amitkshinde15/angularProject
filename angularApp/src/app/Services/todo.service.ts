import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl =  'http://localhost:3000/todos';
  constructor(private httpClient: HttpClient) { }
  //create method
  create(data:any){
    return this.httpClient.post(this.apiUrl, data);
  }
}
