"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var actors1 = [
    {
        id: 100,
        name: 'Tom Hanks',
        birth_year: 1956,
        movies: []
    },
    {
        id: 101,
        name: 'Robert Gama',
        birth_year: 1956,
        movies: []
    },
];
var MOVIES = [
    { id: 11, title: 'Mr. Nice', year: 1992, actors: actors1 },
    { id: 12, title: 'Narco', year: 1992, actors: [] },
    { id: 13, title: 'Bombasto', year: 1992, actors: [] },
    { id: 14, title: 'Celeritas', year: 1992, actors: [] },
    { id: 15, title: 'Magneta', year: 1992, actors: [] },
    { id: 16, title: 'RubberMan', year: 1992, actors: [] },
];
var DetailsComponent = (function () {
    function DetailsComponent(movieService) {
        this.movieService = movieService;
        this.movies = [];
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.movieService.getAllMovies()
            .subscribe(function (data) {
            console.log(data);
            _this.movies = data;
        }, function (error) {
            console.log("error");
        });
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    core_1.Component({
        selector: 'app-details',
        templateUrl: './details.component.html',
        styleUrls: ['./details.component.css']
    })
], DetailsComponent);
exports.DetailsComponent = DetailsComponent;
