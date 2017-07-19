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
import { MoreService } from '../../services/more.service';
import { UserService } from '../../services/user.service';
import { MdDialog, MdDialogConfig, MdSnackBar } from '@angular/material';
import { MoreComponent } from '../more/more.component';
import { RegisterEventComponent } from '../registerevent/registerevent.component';
import { CancelEventComponent } from '../cancelevent/cancelevent.component';
var WorkshopPageComponent = (function () {
    function WorkshopPageComponent(moreService, dialog, snackBar, userService) {
        this.moreService = moreService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userService = userService;
        this.nteventsRegistered = {
            e11: false,
            e12: false,
            e13: false
        };
    }
    WorkshopPageComponent.prototype.ngOnInit = function () {
        this.data = this.moreService.getWMore();
        if (localStorage.getItem('token')) {
            this.nteventsRegistered.e11 = JSON.parse(localStorage.getItem('e11'));
            this.nteventsRegistered.e12 = JSON.parse(localStorage.getItem('e12'));
            this.nteventsRegistered.e13 = JSON.parse(localStorage.getItem('e13'));
        }
    };
    WorkshopPageComponent.prototype.openConfirmation = function (eventId) {
        var _this = this;
        var dialogRef = this.dialog.open(RegisterEventComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "confirm") {
                var body = {
                    eventId: eventId,
                    token: _this.userService.getToken()
                };
                _this.userService.registerEvent(body)
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
                    _this.nteventsRegistered.e11 = data.eventsRegistered.e11;
                    _this.nteventsRegistered.e12 = data.eventsRegistered.e12;
                    _this.nteventsRegistered.e13 = data.eventsRegistered.e13;
                    _this.snackBar.open('Successfully Registerd', 'OK');
                }, function (error) {
                    _this.snackBar.open('Registration Faled. Please Try Again Later', 'OK');
                });
            }
        });
    };
    WorkshopPageComponent.prototype.openDialog = function (data) {
        var config = new MdDialogConfig();
        config.data = data;
        var dialogRef = this.dialog.open(MoreComponent, config);
    };
    WorkshopPageComponent.prototype.cancelRegistration = function (eventId) {
        var _this = this;
        var dialogRef = this.dialog.open(CancelEventComponent);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == "confirm") {
                var body = {
                    eventId: eventId,
                    token: _this.userService.getToken()
                };
                _this.userService.cancelEvent(body)
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
                    _this.nteventsRegistered.e11 = data.eventsRegistered.e11;
                    _this.nteventsRegistered.e12 = data.eventsRegistered.e12;
                    _this.nteventsRegistered.e13 = data.eventsRegistered.e13;
                    _this.snackBar.open('Your Registration Is Cancelled', 'OK');
                }, function (error) {
                    _this.snackBar.open('Cancellation Failed. Please Try Again Later', 'OK');
                });
            }
        });
    };
    return WorkshopPageComponent;
}());
WorkshopPageComponent = __decorate([
    Component({
        selector: 'app-workshoppage',
        templateUrl: './workshoppage.component.html',
        styleUrls: ['./workshop.component.css']
    }),
    __metadata("design:paramtypes", [MoreService, MdDialog, MdSnackBar, UserService])
], WorkshopPageComponent);
export { WorkshopPageComponent };
