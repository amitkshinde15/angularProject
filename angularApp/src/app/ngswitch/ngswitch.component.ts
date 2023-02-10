import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  courses: any[] = [
    {
      id: 1,
      desc: 'Angular core Deep Dive',
      iconURL: 'https://openclipart.org/image/2400px/svg_to_png/272339/angular.png',
      category: 'INTERMEDIATE'
    },
    {
      id: 2,
      desc: 'Javascript zero to hero',
      iconURL: 'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png',
      category: 'BEGINNER'
    },
    {
      id: 3,
      desc: 'Typescript',
      iconURL: 'https://2.bp.blogspot.com/-ObmtX8jdtGU/WGHJ19Vp6MI/AAAAAAAALk8/MS_KEEa80wszbUSp9bmHVbEY9YZ3u2bAACLcB/s1600/typescript-21.jpg',
      category: 'ADVANCED'
    }
    ,
    {
      id: 4,
      desc: 'HTML',
      iconURL: 'https://2.bp.blogspot.com/-ObmtX8jdtGU/WGHJ19Vp6MI/AAAAAAAALk8/MS_KEEa80wszbUSp9bmHVbEY9YZ3u2bAACLcB/s1600/typescript-21.jpg',
     
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
