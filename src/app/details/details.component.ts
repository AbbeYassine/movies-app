import { Component, OnInit } from '@angular/core';

import { Movie } from '../shared/models/movie/movie';
import { Actor } from '../shared/models/actor/actor';
import { MoviesService } from '../shared/services/movies.service';

const actors1: Actor[] = [
  {
    id: 100,
    nom: 'Tom Hanks',
    birth_year: 1956,
    movies: []
  },
  {
    id: 101,
    nom: 'Robert Gama',
    birth_year: 1956,
    movies: []
  },
]

const MOVIES: Movie[] = [
  { id: 11, title: 'Mr. Nice', year:1992 , actors:actors1 },
  { id: 12, title: 'Narco' ,  year:1992 ,actors:[]},
  { id: 13, title: 'Bombasto' ,  year:1992 ,actors:[]},
  { id: 14, title: 'Celeritas',  year:1992 ,actors:[]},
  { id: 15, title: 'Magneta' ,  year:1992 ,actors:[]},
  { id: 16, title: 'RubberMan',  year:1992 ,actors:[]},
];

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movies = MOVIES;

  //movies= MoviesService.getAllMovies();

  constructor() { }

  ngOnInit() {
  }

}
