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
import { MdDialog, MdDialogConfig, MdSnackBar } from '@angular/material';
import { MoreService } from '../../services/more.service';
import { UserService } from '../../services/user.service';
import { MoreComponent } from '../more/more.component';
import { RegisterEventComponent } from '../registerevent/registerevent.component';
var NTEventPageComponent = (function () {
    function NTEventPageComponent(moreService, dialog, userService, snackBar) {
        this.moreService = moreService;
        this.dialog = dialog;
        this.userService = userService;
        this.snackBar = snackBar;
    }
    NTEventPageComponent.prototype.ngOnInit = function () {
        this.data = this.moreService.getNMore();
    };
    NTEventPageComponent.prototype.openConfirmation = function (eventId) {
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
                    _this.snackBar.open('Successfully Registerd', 'OK');
                }, function (error) {
                    _this.snackBar.open('Registration Faled. Please Try Again Later', 'OK');
                });
            }
        });
    };
    NTEventPageComponent.prototype.openDialog = function (data) {
        var config = new MdDialogConfig();
        config.data = data;
        var dialogRef = this.dialog.open(MoreComponent, config);
    };
    return NTEventPageComponent;
}());
NTEventPageComponent = __decorate([
    Component({
        selector: 'app-nteventpage',
        templateUrl: './nteventpage.component.html',
        styleUrls: ['./nteventpage.component.css']
    }),
    __metadata("design:paramtypes", [MoreService, MdDialog, UserService, MdSnackBar])
], NTEventPageComponent);
export { NTEventPageComponent };
