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
        const regDialogRef = this.dialog.open(RegisterComponent);
        regDialogRef.afterClosed().subscribe(result => {
            console.log(result);
        });
    }

    openLoginForm() {

    }
}