import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WikiService {
  url = 'https://en.wikipedia.org/w/api.php';
  constructor(private httpClient : HttpClient) { }

  getData(searchTerm: string){
  
    return this.httpClient.get(this.url,{
      params: {
       action:'query',
       format:'json',
       list:'search',
       utf8:'1',
       srsearch: searchTerm,
       origin: '*'
      }
    });
   }
}
