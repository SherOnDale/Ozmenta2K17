import { MdDialogRef } from '@angular/material';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(public dialogRef: MdDialogRef<LoginComponent>) {}
}