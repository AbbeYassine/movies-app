/**
 * Created by Vyndee on 22/04/2017.
 */
/**
 * Created by Vyndee on 22/04/2017.
 */
import {Component, Input} from '@angular/core';
import {Movie} from "../models/movie/movie";

@Component({
  selector: 'item-movie',
  templateUrl: './item-movie.html',
  styleUrls: ['./item-movie.css']
})
export class ItemMovieComponent {

  @Input()
  movie: Movie;


}
