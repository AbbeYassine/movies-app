import {Component, OnInit} from '@angular/core';


import {Router} from '@angular/router';
import {Subscription} from "rxjs";
import {NotificationsService} from "angular2-notifications/dist";
import {Movie} from "../../shared/models/movie/movie";
import {Actor} from "../../shared/models/actor/actor";
import {MoviesService} from "../../shared/services/movies.service";


@Component({
  templateUrl: 'movie-create.component.html'
})

export class MovieCreateComponent implements OnInit {
  newMovie: Movie;
  movies: Movie[];
  public edited = false;
  public clicked = true;
  public values;
  public nb_actors: number;
  public actor="";
  public items: Array<Movie>;

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
    this.nb_actors=0;
    this.items = this._moviesService.getAllActorsMock();
  }
/*  set actor(actor) {
    this._actor = actor;
    this.addActorToMovies();
}*/

  addActorToMovies(){
  alert("actor added successfully");
      this.values.push(this.actor);
    //    this._moviesService.addActortoMovie(this.actor,this.newMovie);
  }

  createMovie(event) {
    this.edited = true;
    // this.clicked = false;
    this.values = Array(this.nb_actors).fill(1);
    let _this = this;

    console.log(this.newMovie);
  /*  this.busy = this._moviesService.createMovie(this.newMovie)
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
        });*/
  }

  cancelCreate(event) {
    this._router.navigate(['Movies']);
  }

}
