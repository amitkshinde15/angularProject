import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';


@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title : string = 'Top 3 Bollywood movies';

  movies : Movie[] = [
    {title: '3 Idiots', director: 'Rajkumar', cast:'Amir',releaseDate: '2009'},
    {title: 'Tumbad', director: 'Rahil', cast:'Rahi',releaseDate: '2020'},
    {title: 'Kantara', director: 'Rishab', cast:'Rishab',releaseDate: '2022'}
  ];
  favSongs = ['Dekha Tuze to', 'Jiyo re Bahubali', 'Duniya Banane Wale'];

  constructor() { }

  ngOnInit() {
  }

}
