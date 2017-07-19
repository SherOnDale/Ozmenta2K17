var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.loggedIn = false;
        this.activeUser = {
            token: ''
        };
        if (this.isLoggedIn()) {
            this.activeUser.token = localStorage.getItem('token');
        }
    }
    UserService.prototype.registerUser = function (newUser) {
        var body = JSON.stringify(newUser);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('http://localhost:3000/registerUser', body, {
        return this.http.post('http://www,ozmenta2k17.com/registerUser', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    UserService.prototype.loginUser = function (loginUser) {
        var user = {
            email: loginUser.email,
            password: loginUser.password
        };
        var userJSON = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        // return this.http.post('http://localhost:3000/loginUser', userJSON, {
        return this.http.post('http://www.ozmenta2k17.com/loginUser', userJSON, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    UserService.prototype.registerEvent = function (data) {
        var body = JSON.stringify(data);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://www.ozmenta2k17.com/registerEvent', body, {
            // return this.http.post('http://localhost:3000/registerEvent', body, {
            headers: headers
        })
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable.throw(error); });
    };
    UserService.prototype.logoutUser = function () {
        localStorage.clear();
    };
    UserService.prototype.isLoggedIn = function () {
        return localStorage.getItem('token') != null;
    };
    UserService.prototype.getToken = function () {
        return this.activeUser.token;
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], UserService);
export { UserService };
