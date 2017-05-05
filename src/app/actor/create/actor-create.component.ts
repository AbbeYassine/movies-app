import {Component, OnInit} from '@angular/core';

import {Movie} from "../../shared/models/movie/movie";
import {MoviesService} from "../../shared/services/movies.service";
import {Router} from '@angular/router';

@Component({
    templateUrl: './movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
    Bigtitle: string = 'Create New Movie';
    newMovie: Movie;

    constructor(
        private _moviesService: MoviesService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.newMovie = new Movie;
    }

    createMovie(event) {
    alert(JSON.stringify(this.newMovie));
            let _this = this;

        this._moviesService.createMovie(this.newMovie)
            .subscribe(function () {
                alert('hi');
            });
    }

    cancelCreate(event) {
        this._router.navigate(['Movies']);
    }

}
