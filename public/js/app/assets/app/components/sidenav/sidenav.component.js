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
import { LoginComponent } from './../login/login.component';
import { MdDialog } from '@angular/material';
import { Component } from '@angular/core';
var SidenavComponent = (function () {
    function SidenavComponent(dialog, userService) {
        this.dialog = dialog;
        this.userService = userService;
    }
    SidenavComponent.prototype.openLoginForm = function () {
        var dialogRef = this.dialog.open(LoginComponent);
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SidenavComponent.prototype.isLoggedIn = function () {
        return this.userService.isLoggedIn();
    };
    SidenavComponent.prototype.logout = function () {
        this.userService.logoutUser();
    };
    return SidenavComponent;
}());
SidenavComponent = __decorate([
    Component({
        selector: 'app-sidenav',
        templateUrl: './sidenav.component.html',
        styleUrls: ['./sidenav.component.css']
    }),
    __metadata("design:paramtypes", [MdDialog, UserService])
], SidenavComponent);
export { SidenavComponent };
