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
    public values;
    public nb_actors : number;
    public actor: string;
    public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
  'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
  'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
  'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
  'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
  'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
  'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];


    constructor(
        private _moviesService: MoviesService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.newMovie = new Movie;
    }

    addActorToMovies(v){

    //  this.values.push(v);
  //    this._moviesService.addActortoMovie(this.actor,this.newMovie);
    }

    createMovie(event) {
     this.edited = true;
    // this.clicked = false;
     this.values = Array();
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
