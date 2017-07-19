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
            localStorage.setItem('e11', data.eventsRegistered.e11);
            localStorage.setItem('e12', data.eventsRegistered.e12);
            localStorage.setItem('e13', data.eventsRegistered.e13);
            localStorage.setItem('e21', data.eventsRegistered.e21);
            localStorage.setItem('e22', data.eventsRegistered.e22);
            localStorage.setItem('e23', data.eventsRegistered.e23);
            localStorage.setItem('e24', data.eventsRegistered.e24);
            localStorage.setItem('e25', data.eventsRegistered.e25);
            localStorage.setItem('e26', data.eventsRegistered.e26);
            localStorage.setItem('e31', data.eventsRegistered.e31);
            localStorage.setItem('e32', data.eventsRegistered.e32);
            localStorage.setItem('e33', data.eventsRegistered.e33);
            localStorage.setItem('e34', data.eventsRegistered.e34);
            localStorage.setItem('e35', data.eventsRegistered.e35);
            localStorage.setItem('e36', data.eventsRegistered.e36);
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
