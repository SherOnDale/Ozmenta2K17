import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-registerevent',
    templateUrl: './registerevent.component.html',
    styleUrls: ['./registerevent.component.css']
})

export class RegisterEventComponent {
    isLoggedIn: boolean;
    constructor(private dialogRef: MdDialogRef<RegisterEventComponent>, private userService: UserService) {
        this.isLoggedIn = this.userService.isLoggedIn();
    }
}