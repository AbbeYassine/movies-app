"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_1 = require("../../shared/models/movie/movie");
var MovieCreateComponent = (function () {
    function MovieCreateComponent(_moviesService, _router, _service) {
        this._moviesService = _moviesService;
        this._router = _router;
        this._service = _service;
        this.edited = false;
        this.clicked = true;
        this.actors = [];
        this.options = {
            position: ["bottom", "right "],
            timeOut: 0,
            lastOnBottom: true,
        };
    }
    MovieCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newMovie = new movie_1.Movie;
        this.nb_actors = 0;
        this.items = this._moviesService.getAllActorsMock();
        this._moviesService.getAllActors()
            .subscribe(function (data) {
            _this.actors = data;
        }, function (error) {
            console.log(error);
        });
    };
    /*  set actor(actor) {
     this._actor = actor;
     this.addActorToMovies();
     }*/
    MovieCreateComponent.prototype.addActorToMovies = function () {
        // alert("actor added successfully");
        console.log(JSON.stringify(this.index));
        this.values.push(this.index);
        this.actors[this.index];
        this._moviesService.addActortoMovie(this.newMovien);
    };
    MovieCreateComponent.prototype.createMovie = function (event) {
        this.edited = true;
        // this.clicked = false;
        this.values = Array(this.nb_actors).fill(1);
        var _this = this;
        console.log(this.newMovie);
        this.busy = this._moviesService.createMovie(this.newMovie)
            .subscribe(function (data) {
            console.log(data);
            _this._service.success('Movie', 'Ajout movie success', {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        }, function (error) {
            console.log(error);
            _this._service.error('Movie', 'Ajout movie error', {
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: false,
                maxLength: 10
            });
        });
    };
    MovieCreateComponent.prototype.cancelCreate = function (event) {
        this._router.navigate(['Movies']);
    };
    return MovieCreateComponent;
}());
MovieCreateComponent = __decorate([
    core_1.Component({
        templateUrl: 'movie-create.component.html'
    })
], MovieCreateComponent);
exports.MovieCreateComponent = MovieCreateComponent;
