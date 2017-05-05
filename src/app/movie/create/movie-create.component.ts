import {Component, OnInit} from '@angular/core';

import {Movie} from "../../shared/models/movie/movie";
import {MoviesService} from "../../shared/services/movies.service";
import {Router} from '@angular/router';

@Component({
    templateUrl: './movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
    newMovie: Movie;
    public edited = false;
    public clicked = true;
    public values = new Array();
    public nb_actors : number;

    constructor(
        private _moviesService: MoviesService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.newMovie = new Movie;
    }

    createMovie(event) {
     this.edited = true;
    // this.clicked = false;
     this.values = Array(this.nb_actors).fill(1);
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
