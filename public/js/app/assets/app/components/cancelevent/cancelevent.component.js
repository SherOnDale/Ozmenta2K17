var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { UserService } from '../../services/user.service';
var CancelEventComponent = (function () {
    function CancelEventComponent(dialogRef, userService) {
        this.dialogRef = dialogRef;
        this.userService = userService;
        this.isLoggedIn = this.userService.isLoggedIn();
    }
    return CancelEventComponent;
}());
CancelEventComponent = __decorate([
    Component({
        selector: 'app-cancelevent',
        templateUrl: './cancelevent.component.html',
        styleUrls: ['./cancelevent.component.css']
    }),
    __metadata("design:paramtypes", [MdDialogRef, UserService])
], CancelEventComponent);
export { CancelEventComponent };
