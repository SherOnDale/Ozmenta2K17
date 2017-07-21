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
import { MdSnackBar } from '@angular/material';
var RegisterComponent = (function () {
    function RegisterComponent(fb, snackBar, userService) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.userService = userService;
        this.fName = '';
        this.lName = '';
        this.email = '';
        this.password = '';
        this.numberPattern = /^\d{10}$/;
        this.degrees = [
            { value: 'be', viewValue: 'B.E.' },
            { value: 'btech', viewValue: 'B.Tech' },
            { value: 'other', viewValue: 'Other' }
        ];
        this.departments = [
            { value: 'cse', viewValue: 'CSE' },
            { value: 'it', viewValue: 'IT' },
            { value: 'ece', viewValue: 'ECE' },
            { value: 'eee', viewValue: 'EEE' },
            { value: 'eie', viewValue: 'EIE' },
            { value: 'mech', viewValue: 'MECH' },
            { value: 'civi;', viewValue: 'CIVIL' },
            { value: 'other', viewValue: 'Other' }
        ];
        this.years = [
            { value: 1, viewValue: '1st Year' },
            { value: 2, viewValue: '2nd Year' },
            { value: 3, viewValue: '3rd Year' },
            { value: 4, viewValue: '4th Year' }
        ];
        this.rForm = fb.group({
            'fName': [null, Validators.required],
            'lName': [null, Validators.required],
            'cName': [null, Validators.required],
            'degree': [null, Validators.required],
            'dept': [null, Validators.required],
            'year': [null, Validators.required],
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
        var user = {
            email: post.email,
            password: post.password,
            fName: post.fName,
            lName: post.lName,
            phno: post.phno,
            cName: post.cName,
            degree: post.degree,
            dept: post.dept,
            year: post.year
        };
        var email = user.email;
        var password = user.password;
        this.userService.registerUser(user)
            .subscribe(function (data) {
            _this.snackBar.open('Verification Mail Sent', 'OK');
        }, function (error) {
            _this.snackBar.open('Unable to register. Please try again later', 'OK');
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
    __metadata("design:paramtypes", [FormBuilder, MdSnackBar, UserService])
], RegisterComponent);
export { RegisterComponent };
