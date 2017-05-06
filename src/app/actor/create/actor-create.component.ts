import {Component, OnInit} from '@angular/core';


import {Router} from '@angular/router';
import {Subscription} from "rxjs";
import {NotificationsService} from "angular2-notifications/dist";
import {Actor} from "../../shared/models/actor/actor";
import {Movie} from "../../shared/models/movie/movie";
import {MoviesService} from "../../shared/services/movies.service";

@Component({
  templateUrl: 'actor-create.component.html'
})

export class ActorCreateComponent implements OnInit {
  newActor: Actor;
  public edited = false;
  public clicked = true;
  public values;
  public nb_actors: number;
  public movie: string;
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
    this.newActor = new Actor;
    this.nb_actors=0;
    this.items = this._moviesService.getAllActorsMock();
  }

  addMovieToActors(){
  alert("movie added to actor");
      this.values.push(this.movie);
    //    this._moviesService.addActortoMovie(this.actor,this.newMovie);
  }

  createActor(event) {
    this.edited = true;
    // this.clicked = false;
    this.values = Array(this.nb_actors).fill(1);
    let _this = this;

    console.log(this.newActor);
  /*  this.busy = this._moviesService.createActor(this.newActor)
      .subscribe(data => {
          console.log(data);
          _this._service.success(
            'Actor',
            'Ajout actor success',
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
            'Actor',
            'Ajout actor error',
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
