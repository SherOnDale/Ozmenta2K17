import { UserService } from './services/user.service';
import { ContactsPageComponent } from './components/contactspage/contactspage.component';
import { WorkshopPageComponent } from './components/workshoppage/workshoppage.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventPageComponent } from './components/eventpage/eventpage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material';
import { AppComponent } from "./app.component";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import 'hammerjs';
import {HttpModule} from "@angular/http";

@NgModule({
    entryComponents: [LoginComponent, RegisterComponent],
    declarations: [AppComponent, SidenavComponent, HomePageComponent, EventPageComponent, RegisterComponent, LoginComponent, WorkshopPageComponent, ContactsPageComponent],
    imports: [ MaterialModule, BrowserModule, FormsModule, BrowserAnimationsModule, ReactiveFormsModule, HttpModule, routing],
    providers: [UserService],
    bootstrap: [AppComponent]
})
export class AppModule {

}