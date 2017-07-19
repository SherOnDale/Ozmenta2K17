import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-cancelevent',
    templateUrl: './cancelevent.component.html',
    styleUrls: ['./cancelevent.component.css']
})

export class CancelEventComponent {
    isLoggedIn: boolean;
    constructor(private dialogRef: MdDialogRef<CancelEventComponent>, private userService: UserService) {
        this.isLoggedIn = this.userService.isLoggedIn();
    }
}