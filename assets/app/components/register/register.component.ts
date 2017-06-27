import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(public dialogRef: MdDialogRef<RegisterComponent>) { }
}