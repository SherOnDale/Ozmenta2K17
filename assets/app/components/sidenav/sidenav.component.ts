import { LoginComponent } from './../login/login.component';
import { MdDialog, MdDialogRef } from '@angular/material';
import { RegisterComponent } from './../register/register.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

    constructor(private dialog: MdDialog) {
}

    openRegisterForm() {
        let dialogRef = this.dialog.open(RegisterComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    
    openLoginForm() {
        let dialogRef = this.dialog.open(LoginComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
}