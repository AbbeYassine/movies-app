import {Component, OnInit} from '@angular/core';


import {Router} from '@angular/router';
import {Subscription} from "rxjs";
import {NotificationsService} from "angular2-notifications/dist";
import {Movie} from "../../shared/models/movie/movie";
import {MoviesService} from "../../shared/services/movies.service";

@Component({
  templateUrl: 'movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
  newMovie: Movie;
  public edited = false;
  public clicked = true;
  public values;
  public nb_actors: number;
  public actor: string;
  public items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];

  busy: Subscription;




  public options = {
    position: ["bottom", "right "],
    timeOut: 0,
    lastOnBottom: true,
  };

  constructor(private _moviesService: MoviesService,
              private _router: Router,
              private _service: NotificationsService) {
  }

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
    this.values = Array(this.nb_actors).fill(1);
    let _this = this;

    console.log(this.newMovie);
    this.busy = this._moviesService.createMovie(this.newMovie)
      .subscribe(data => {
          console.log(data);
          _this._service.success(
            'Movie',
            'Ajout movie success',
            {
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
              maxLength: 10
            }
          )
        },
        error => {
          console.log(error);
          _this._service.error(
            'Movie',
            'Ajout movie error',
            {
              showProgressBar: true,
              pauseOnHover: false,
              clickToClose: false,
              maxLength: 10
            });
        });
  }

  cancelCreate(event) {
    this._router.navigate(['Movies']);
  }

}
