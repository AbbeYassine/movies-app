/**
 * Created by Vyndee on 22/04/2017.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";
import {MovieCreateComponent} from "./movie/create/movie-create.component";
import {ActorCreateComponent} from "./actor/create/actor-create.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: DetailsComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "add-movie",
    component: MovieCreateComponent
  },
  {
    path: "add-actor",
    component: ActorCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

export const navigatableComponent = [
  DetailsComponent,
  HomeComponent,
  MovieCreateComponent,
  ActorCreateComponent
];
