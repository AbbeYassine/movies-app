import {Component, OnInit} from '@angular/core';

import {Movie} from "../../shared/models/movie/movie";
import {Router} from '@angular/router';
import {MoviesService} from "../../shared/services/movies.service";

@Component({
  templateUrl: './movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
  Bigtitle: string = 'Create New Movie';
  newMovie: Movie;

  constructor(private _moviesService: MoviesService,
              private _router: Router) {
  }

  ngOnInit() {
    this.newMovie = new Movie;
  }

  createMovie(event) {
    console.log(this.newMovie);
    let _this = this;

    this._moviesService.createMovie(this.newMovie)
      .subscribe(
        data => {
          console.log("Data")
        }, error => {
          console.log("Error");
        });
  }

  cancelCreate(event) {
    this._router.navigate(['Movies']);
  }

}
