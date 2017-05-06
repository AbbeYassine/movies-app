"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Vyndee on 22/04/2017.
 */
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var config_1 = require("../config");
var generic_service_1 = require("./generic.service");
/**
 * Created by Vyndee on 27/03/2017.
 */
var MoviesService = (function (_super) {
    __extends(MoviesService, _super);
    function MoviesService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        return _this;
    }
    MoviesService.prototype.getAllMovies = function () {
        return this.http.get(config_1.Config.baseUrl + "/movies", {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    MoviesService.prototype.getAllMoviesMock = function () {
        var movies = [{
                id: 1,
                year: 2012,
                title: "Tom Hanks",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }, {
                id: 1,
                year: 2013,
                title: "Julia Roberts",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }, {
                id: 1,
                year: 2018,
                title: "Nicole Kidman",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            },
            {
                id: 1,
                year: 2020,
                title: "Tom Cruise",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }];
        return movies;
    };
    MoviesService.prototype.getAllActors = function () {
        return this.http.get(config_1.Config.baseUrl + "/actors", {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    MoviesService.prototype.getAllActorsMock = function () {
        var movies = [{
                id: 1,
                year: 2012,
                title: "Titanic",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }, {
                id: 1,
                year: 2013,
                title: "Lost",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }, {
                id: 1,
                year: 2018,
                title: "Colonia",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            },
            {
                id: 1,
                year: 2020,
                title: "The social network",
                actors: [{
                        id: 1,
                        birth_year: 2012,
                        name: "Movie name",
                        movies: null,
                    }]
            }];
        return movies;
    };
    MoviesService.prototype.createMovie = function (movie) {
        var body = JSON.stringify(movie);
        return this.http.post(config_1.Config.baseUrl + "/movies", body, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    MoviesService.prototype.createActor = function (actor) {
        var body = JSON.stringify(actor);
        return this.http.post(config_1.Config.baseUrl + "/actors", body, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    MoviesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MoviesService.prototype.addActortoMovie = function (movie, actor) {
        var acteur = this.http.get(config_1.Config.JUrl + "/actors/" + movie.id, {
            headers: this.headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleErrors);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = JSON.stringify(movie);
        return this.http.post('localhost:3000/movies', body, headers).map(function (res) { return console.log(res.json()); });
    };
    MoviesService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return MoviesService;
}(generic_service_1.GenericService));
MoviesService = __decorate([
    core_1.Injectable()
], MoviesService);
exports.MoviesService = MoviesService;
