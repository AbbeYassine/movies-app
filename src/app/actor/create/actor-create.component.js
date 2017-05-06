"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var actor_1 = require("../../shared/models/actor/actor");
var ActorCreateComponent = (function () {
    function ActorCreateComponent(_moviesService, _router, _service) {
        this._moviesService = _moviesService;
        this._router = _router;
        this._service = _service;
        this.edited = false;
        this.clicked = true;
        this.options = {
            position: ["bottom", "right "],
            timeOut: 0,
            lastOnBottom: true,
        };
    }
    ActorCreateComponent.prototype.ngOnInit = function () {
        this.newActor = new actor_1.Actor;
        this.nb_actors = 0;
        this.items = this._moviesService.getAllActorsMock();
    };
    ActorCreateComponent.prototype.addMovieToActors = function () {
        alert("movie added to actor");
        this.values.push(this.movie);
        //    this._moviesService.addActortoMovie(this.actor,this.newMovie);
    };
    ActorCreateComponent.prototype.createActor = function (event) {
        this.edited = true;
        // this.clicked = false;
        this.values = Array(this.nb_actors).fill(1);
        var _this = this;
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
    };
    ActorCreateComponent.prototype.cancelCreate = function (event) {
        this._router.navigate(['Movies']);
    };
    return ActorCreateComponent;
}());
ActorCreateComponent = __decorate([
    core_1.Component({
        templateUrl: 'actor-create.component.html'
    })
], ActorCreateComponent);
exports.ActorCreateComponent = ActorCreateComponent;
