import {BrowserModule} from '@angular/platform-browser';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RoutingModule, navigatableComponent} from "./app.routing";
import {ItemMovieComponent} from "./shared/item-movie/item-movie.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {HeaderComponent} from "./shared/header/header.component";
import { DetailsComponent } from './details/details.component';

import {BusyModule} from "angular2-busy";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SimpleNotificationsModule} from "angular2-notifications";
import {MoviesService} from "./shared/services/movies.service";

export const components = [
  ItemMovieComponent,
  FooterComponent,
  HeaderComponent
];


@NgModule({
  declarations: [
    AppComponent,
    ...navigatableComponent,
    ...components,
    DetailsComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    BusyModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    MoviesService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
}
