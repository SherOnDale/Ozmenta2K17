import { User } from './../../models/user.model';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
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
  degrees = [
    { value: 'be', viewValue: 'B.E.'},
    { value: 'btech', viewValue: 'B.Tech'},
    {value: 'other', viewValue: 'Other'}
  ];
  departments = [
    {value: 'cse', viewValue: 'CSE'},
    {value: 'it', viewValue: 'IT'},
    {value: 'ece', viewValue: 'ECE'},
    {value: 'eee', viewValue: 'EEE'},
    {value: 'eie', viewValue: 'EIE'},
    {value: 'mech', viewValue: 'MECH'},
    {value: 'civi;', viewValue: 'CIVIL'},
    {value: 'other', viewValue: 'Other'}
  ];
  years = [
    {value: 1, viewValue: '1st Year'},
    {value: 2, viewValue: '2nd Year'},
    {value: 3, viewValue: '3rd Year'},
    {value: 4, viewValue: '4th Year'}
  ];

  constructor(private fb: FormBuilder, private snackBar: MdSnackBar, public userService: UserService) {
    this.rForm = fb.group({
      'fName': [null, Validators.required],
      'lName': [null, Validators.required],
      'cName': [null, Validators.required],
      'degree': [null, Validators.required],
      'dept': [null, Validators.required],
      'year': [null, Validators.required],
      'email': [null, Validators.email],
      'phno': [null, Validators.compose([
        Validators.pattern(this.numberPattern),
        Validators.required])],
      'password': [null, Validators.required]
    });
  }
  addPost(post: {email: string, password: string, fName: string, lName: string, phno: number, cName: string, degree: string, dept: string, year: string}) {
    const user: User = {
      email: post.email,
      password: post.password,
      fName: post.fName,
      lName: post.lName,
      phno: post.phno,
      cName: post.cName,
      degree: post.degree,
      dept: post.dept,
      year: post.year
    }
    const email = user.email;
    const password = user.password;
    this.userService.registerUser(user)
      .subscribe(
        data => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.snackBar.open('Verification Mail Sent', 'OK');
        },
        error => {
          this.snackBar.open('Unable to register. Please try again later', 'OK');
        }
      );  
  }
}