/**
 * Created by Vyndee on 22/04/2017.
 */
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';
import {Config} from "../config";
import {GenericService} from "./generic.service";
import {Movie} from "../models/movie/movie";
import {Actor} from "../models/actor/actor";

/**
 * Created by Vyndee on 27/03/2017.
 */

@Injectable()
export class MoviesService extends GenericService {

  constructor(private http: Http) {
    super();
  }

  getAllMovies() {
    return this.http.get(Config.baseUrl + "/movies", {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors)
  }

  getAllMoviesMock() {
    let movies: Movie[] = [{
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
  }

  getAllActors() {
    return this.http.get(Config.baseUrl + "/actors", {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors)
  }

  getAllActorsMock() {
    let movies: Movie[] = [{
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
  }

  createMovie(movie: Movie) {


    let body = JSON.stringify(movie);

    return this.http.post(Config.baseUrl + "/movies", body,
      {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(this.handleErrors)


  }

  createActor(actor: Actor) {


    let body = JSON.stringify(actor);

    return this.http.post(Config.baseUrl + "/actors", body,
      {
        headers: this.headers
      })
      .map(res => res.json())
      .catch(this.handleErrors)


  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  addActortoMovie(movie: Movie, actor: Actor) {


    return this.http.post(Config.JUrl + "/movies/" + movie.id + "/actors", JSON.stringify(actor), {
      headers: this.headers
    })
      .map(res => res.json())
      .catch(this.handleErrors)


  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
