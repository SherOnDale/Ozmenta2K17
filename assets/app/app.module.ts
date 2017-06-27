import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventPageComponent } from './components/eventpage/eventpage.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { RegisterComponent } from './components/register/register.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule} from '@angular/material';
import { AppComponent } from "./app.component";
import {FormsModule} from '@angular/forms';
import {routing} from './app.routing';
import 'hammerjs';

@NgModule({
    declarations: [AppComponent, SidenavComponent, RegisterComponent, HomePageComponent, EventPageComponent],
    imports: [ MaterialModule, BrowserModule, FormsModule, BrowserAnimationsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}