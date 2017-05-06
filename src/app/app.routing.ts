/**
 * Created by Vyndee on 22/04/2017.
 */


import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MovieCreateComponent} from "./movie/create/movie-create.component";
import {ActorCreateComponent} from "./actor/create/actor-create.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: MovieCreateComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

export const navigatableComponent = [
  HomeComponent,
  MovieCreateComponent,
  ActorCreateComponent
];
