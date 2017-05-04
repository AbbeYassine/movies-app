/**
 * Created by Vyndee on 22/04/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Movie} from "../shared/models/movie/movie";
import {MoviesService} from "../shared/services/movies.service";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movies: Movie[];

  constructor(private moviesService: MoviesService) {

  }

  ngOnInit() {
    this.movies = this.moviesService.getAllMoviesMock();
  }
}
