import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RapidapiService {
  url = 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=tesla&region=US';
  urlHotel = "https://hotels4.p.rapidapi.com/v2/get-meta-data";

  constructor(private httpClient: HttpClient) { }

  getFinance(){
    let header = new HttpHeaders({
      "X-RapidAPI-Key": "76233d525emshd1113f7a269cb41p1a89abjsne5844bd3d8ae",
		  "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    })
   return this.httpClient.get(this.url, { headers: header});

  }

}
