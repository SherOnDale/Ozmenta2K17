import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
    selector: 'app-cancelevent',
    templateUrl: './cancelevent.component.html',
    styleUrls: ['./cancelevent.component.css']
})

export class CancelEventComponent {
    constructor(private dialogRef: MdDialogRef<CancelEventComponent>) {}
}