import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MdDialogRef, MdSnackBar } from '@angular/material';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  rForm: FormGroup;
  post: any;
  fName: string = '';
  lName: string = '';
  email: string = '';
  phno: number;
  password: string = '';
  numberPattern: RegExp = /^\d{10}$/;

  constructor(public dialogRef: MdDialogRef<RegisterComponent>, private fb: FormBuilder, private snackBar: MdSnackBar, public userService: UserService) {
    this.rForm = fb.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'email': [null, Validators.email],
      'phno': [null, Validators.compose([
        Validators.pattern(this.numberPattern),
        Validators.required])],
      'password': [null, Validators.required]
    });
  }
  addPost(post: {email: string, password: string, fName: string, lName: string, phno: number}) {
    const user: User = {
      email: post.email,
      password: post.password,
      fName: post.fName,
      lName: post.lName,
      phno: post.phno
    }
    const email = user.email;
    const password = user.password;
    this.userService.registerUser(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.dialogRef.close();
          this.snackBar.open(data.message, 'OK');
        },
        error => {
          this.snackBar.open(error.message, 'OK');
        }
      );  
  }
}