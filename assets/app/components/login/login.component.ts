import { UserService } from './../../services/user.service';
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

  constructor(public dialogRef: MdDialogRef<LoginComponent>, private fb: FormBuilder, private snackBar: MdSnackBar, public userService: UserService) {
    this.rForm = fb.group({
      'email': [null, Validators.email],
      'password': [null, Validators.required],
      'remember': ''
    });
  }
  
  loginUser(loginDetails) {
    this.userService.loginUser(loginDetails)
      .subscribe(
        data => {
              localStorage.setItem('e11', data.eventsRegistered.e11);
              localStorage.setItem('e12', data.eventsRegistered.e12);
              localStorage.setItem('e13', data.eventsRegistered.e13);
              localStorage.setItem('e21', data.eventsRegistered.e21);
              localStorage.setItem('e22', data.eventsRegistered.e22);
              localStorage.setItem('e23', data.eventsRegistered.e23);
              localStorage.setItem('e24', data.eventsRegistered.e24);
              localStorage.setItem('e25', data.eventsRegistered.e25);
              localStorage.setItem('e26', data.eventsRegistered.e26);
              localStorage.setItem('e31', data.eventsRegistered.e31);
              localStorage.setItem('e32', data.eventsRegistered.e32);
              localStorage.setItem('e33', data.eventsRegistered.e33);
              localStorage.setItem('e34', data.eventsRegistered.e34);
              localStorage.setItem('e35', data.eventsRegistered.e35);
              localStorage.setItem('e36', data.eventsRegistered.e36);
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.dialogRef.close();
          this.snackBar.open(data.message, 'OK');
        },
        error => {
          this.rForm.reset();
          this.snackBar.open('Invalid Username/Password', 'OK');
        }
      );
  }
}