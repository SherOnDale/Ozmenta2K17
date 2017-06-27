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
  fname: string = '';
  sname: string = '';
  email: string = '';
  phno: number;
  password: string = '';
  numberPattern: RegExp = /^\d{10}$/;

  constructor(public dialogRef: MdDialogRef<RegisterComponent>, private fb: FormBuilder, private snackBar: MdSnackBar) {
    this.rForm = fb.group({
      'fname': [null, Validators.required],
      'sname': [null, Validators.required],
      'email': [null, Validators.email],
      'phno': [null, Validators.pattern(this.numberPattern)],
      'password': [null, Validators.required]
    });
  }
  addPost(post) {
    this.fname = post.fname;
    this.sname = post.sname;
    this.email = post.email;
    this.phno = post.phno;
    this.password = post.password;
  }
  
  openAlert() {
    this.snackBar.open('Registration is not open yet', 'OK');
  }
}