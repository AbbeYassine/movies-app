/**
 * Created by Vyndee on 22/04/2017.
 */

import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'details',
    pathMatch: 'full',
  },
  {
    path: 'details',
    component: DetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {
}

export const navigatableComponent = [
  DetailsComponent
];
