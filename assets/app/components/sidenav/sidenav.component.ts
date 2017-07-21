import { UserService } from './../../services/user.service';
import { LoginComponent } from './../login/login.component';
import { MdDialog } from '@angular/material';
import { RegisterComponent } from './../register/register.component';
import { Component } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

    constructor(private dialog: MdDialog, private userService: UserService) {
}
    
    openLoginForm() {
        let dialogRef = this.dialog.open(LoginComponent);
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    
    isLoggedIn() {
        return this.userService.isLoggedIn();
    }

    logout() {
        this.userService.logoutUser();
    }
}