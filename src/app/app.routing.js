/**
 * Created by Vyndee on 22/04/2017.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var details_component_1 = require("./details/details.component");
var movie_create_component_1 = require("./movie/create/movie-create.component");
var actor_create_component_1 = require("./actor/create/actor-create.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'details',
        component: details_component_1.DetailsComponent
    },
    {
        path: "home",
        component: home_component_1.HomeComponent
    },
    {
        path: "add-movie",
        component: movie_create_component_1.MovieCreateComponent
    },
    {
        path: "add-actor",
        component: actor_create_component_1.ActorCreateComponent
    }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(exports.routes)],
        exports: [router_1.RouterModule]
    })
], RoutingModule);
exports.RoutingModule = RoutingModule;
exports.navigatableComponent = [
    details_component_1.DetailsComponent,
    home_component_1.HomeComponent,
    movie_create_component_1.MovieCreateComponent,
    actor_create_component_1.ActorCreateComponent
];
