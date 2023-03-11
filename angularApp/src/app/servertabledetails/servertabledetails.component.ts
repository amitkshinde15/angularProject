import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../Services/demo.service';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-servertabledetails',
  templateUrl: './servertabledetails.component.html',
  styleUrls: ['./servertabledetails.component.css']
})
export class ServertabledetailsComponent implements OnInit {

  user = {};
  constructor(private route: ActivatedRoute, private demoService: DemoService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.demoService.getPostById(id).subscribe(res=> {
     this.user = res;
      console.log('get post by id', res); 
    })
    
  }
}
