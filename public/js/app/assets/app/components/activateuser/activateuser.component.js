var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
var ActivateUserComponent = (function () {
    function ActivateUserComponent(route, http, snackBar, router) {
        this.route = route;
        this.http = http;
        this.snackBar = snackBar;
        this.router = router;
    }
    ActivateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var body = {
                token: params['token']
            };
            var bodyJson = JSON.stringify(body);
            console.log(body.token);
            _this.activateUser(bodyJson)
                .subscribe(function (data) {
                _this.router.navigate(['/']);
                _this.snackBar.open('Thank You. Your account has been successfully verified', 'OK');
            }, function (error) {
                _this.router.navigate(['/']);
                _this.snackBar.open('There is a problem verifying your account. Please try again later', 'OK');
            });
        });
    };
    ActivateUserComponent.prototype.activateUser = function (body) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://www.ozmenta2k17.com/activateUser', body, {
            // return this.http.post('http://localhost:3000/activateUser', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    return ActivateUserComponent;
}());
ActivateUserComponent = __decorate([
    Component({
        selector: 'app-activateuser',
        templateUrl: './activateuser.component.html',
        styleUrls: ['./activateuser.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute, Http, MdSnackBar, Router])
], ActivateUserComponent);
export { ActivateUserComponent };
