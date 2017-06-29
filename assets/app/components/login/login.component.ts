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
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
          this.dialogRef.close();
          this.snackBar.open(data.message, 'OK');
        },
        error => {
          this.rForm.reset();
          this.snackBar.open(error.message, 'OK');
        }
      );
  }
}