import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {

  arrPost: Post[] = [];  //Post is class created in model folder
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getpost().subscribe(res=>{
      this.arrPost = res;
      console.log('post array data', res);
      
    })
  }

}
