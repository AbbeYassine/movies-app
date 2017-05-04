/**
 * Created by Vyndee on 22/04/2017.
 */
import {Http} from "@angular/http";
import {GenericService} from "./generic.service";
import {Injectable} from "@angular/core";
import {Config} from "../config";
import {Movie} from "../models/movie/movie";
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
      title: "Title 2",
      actors: [{
        id: 1,
        birth_year: 2012,
        nom: "Movie name",
        movies: null,
      }]
    }, {
      id: 1,
      year: 2013,
      title: "Title 1",
      actors: [{
        id: 1,
        birth_year: 2012,
        nom: "Movie name",
        movies: null,
      }]
    }];
    return movies;
  }


}
