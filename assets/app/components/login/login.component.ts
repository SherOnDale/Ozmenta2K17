import { MdDialogRef, MdSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  rForm: FormGroup;
  post: any;
  email: string = '';
  password: string = '';
  remember: boolean = false;

  constructor(public dialogRef: MdDialogRef<LoginComponent>, private fb: FormBuilder, private snackBar: MdSnackBar) {
    this.rForm = fb.group({
      'email': [null, Validators.email],
      'password': [null, Validators.required],
      'remember': ''
    });
  }
  addPost(post) {
    this.email = post.email;
    this.password = post.password;
    this.remember = post.remember;
  }
  
  openAlert() {
    this.snackBar.open('Registration is not open yet', 'OK');
  }
}