var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { UserService } from './../../services/user.service';
import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
var LoginComponent = (function () {
    function LoginComponent(dialogRef, fb, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.userService = userService;
        this.email = '';
        this.password = '';
        this.remember = false;
        this.rForm = fb.group({
            'email': [null, Validators.email],
            'password': [null, Validators.required],
            'remember': ''
        });
    }
    LoginComponent.prototype.loginUser = function (loginDetails) {
        var _this = this;
        this.userService.loginUser(loginDetails)
            .subscribe(function (data) {
            localStorage.setItem('eventsRegistered', data.eventsRegistered);
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.userId);
            _this.dialogRef.close();
            _this.snackBar.open(data.message, 'OK');
        }, function (error) {
            _this.rForm.reset();
            _this.snackBar.open('Invalid Username/Password', 'OK');
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    }),
    __metadata("design:paramtypes", [MdDialogRef, FormBuilder, MdSnackBar, UserService])
], LoginComponent);
export { LoginComponent };
