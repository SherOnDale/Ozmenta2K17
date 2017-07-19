var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ActivateUserComponent } from './components/activateuser/activateuser.component';
import { NTEventPageComponent } from './components/nteventpage/nteventpage.component';
import { UserService } from './services/user.service';
import { ContactsPageComponent } from './components/contactspage/contactspage.component';
import { WorkshopPageComponent } from './components/workshoppage/workshoppage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TEventPageComponent } from './components/teventpage/teventpage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterEventComponent } from './components/registerevent/registerevent.component';
import { CancelEventComponent } from './components/cancelevent/cancelevent.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import 'hammerjs';
import { HttpModule } from "@angular/http";
import { MoreService } from './services/more.service';
import { MoreComponent } from './components/more/more.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        entryComponents: [LoginComponent, RegisterComponent, MoreComponent, RegisterEventComponent, CancelEventComponent],
        declarations: [AppComponent, SidenavComponent, HomePageComponent, CancelEventComponent, RegisterEventComponent, TEventPageComponent, RegisterComponent, LoginComponent, WorkshopPageComponent, ContactsPageComponent, NTEventPageComponent, ActivateUserComponent, MoreComponent],
        imports: [MaterialModule, BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, HttpModule, routing, FlexLayoutModule],
        providers: [UserService, MoreService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
