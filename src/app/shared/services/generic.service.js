/**
 * Created by Vyndee on 22/04/2017.
 */
/**
 * Created by Vyndee on 27/03/2017.
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
var http_1 = require("@angular/http");
var rxjs_1 = require("rxjs");
var GenericService = (function () {
    function GenericService() {
        this.headers = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
    }
    GenericService.prototype.handleErrors = function (error) {
        console.log("**** Error *****");
        console.log("status " + error.status);
        console.log("statusText " + error.statusText);
        console.log("url " + error.url);
        console.log("headers " + JSON.stringify(error.headers));
        //console.log(JSON.stringify(response.json()));
        console.log("**** error *****");
        return rxjs_1.Observable.throw(error);
    };
    return GenericService;
}());
GenericService = __decorate([
    core_1.Injectable()
], GenericService);
exports.GenericService = GenericService;
