import { Component, Optional } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MdDialogRef} from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  constructor(@Optional() public dialogRef: MdDialogRef<RegisterComponent>) { }
  onSubmit(form: NgForm) {
    console.log(form.value.email);
    form.resetForm();
  }
}