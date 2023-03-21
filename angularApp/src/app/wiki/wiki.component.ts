import { Component, OnInit } from '@angular/core';
import { WikiService } from '../Services/wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {
  searchTerm:string = '';
  result:any[] = [];
  constructor(private wikiService: WikiService) { }

  ngOnInit() {
  
  }

  displayData() { 
    this.wikiService.getData(this.searchTerm).subscribe((res: any) => {
      this.result = res.query.search;
      console.log(this.result);
    }, err=>{
      console.log(err)
   });
  }
 
}
