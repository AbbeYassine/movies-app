/**
 * Created by Vyndee on 03/05/2017.
 */
import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {


  constructor(private router: Router) {

  }

  goAddMovie() {
    this.router.navigate(["/add-movie"]);
  }


}
