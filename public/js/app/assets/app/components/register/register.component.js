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
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MdDialogRef, MdSnackBar } from '@angular/material';
var RegisterComponent = (function () {
    function RegisterComponent(dialogRef, fb, snackBar, userService) {
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.snackBar = snackBar;
        this.userService = userService;
        this.fName = '';
        this.lName = '';
        this.email = '';
        this.password = '';
        this.numberPattern = /^\d{10}$/;
        this.rForm = fb.group({
            'fName': [null, Validators.required],
            'lName': [null, Validators.required],
            'email': [null, Validators.email],
            'phno': [null, Validators.compose([
                    Validators.pattern(this.numberPattern),
                    Validators.required
                ])],
            'password': [null, Validators.required]
        });
    }
    RegisterComponent.prototype.addPost = function (post) {
        var _this = this;
        this.userService.registerUser(post)
            .subscribe(function (data) {
            _this.snackBar.open("" + data.message, 'OK');
        }, function (error) {
            _this.snackBar.open("" + error.message, 'OK');
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    }),
    __metadata("design:paramtypes", [MdDialogRef, FormBuilder, MdSnackBar, UserService])
], RegisterComponent);
export { RegisterComponent };
