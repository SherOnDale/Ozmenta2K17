import { MdSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { Http, Headers, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-activateuser',
  templateUrl: './activateuser.component.html',
  styleUrls: ['./activateuser.component.css']
})

export class ActivateUserComponent implements OnInit {
  token: string;

  constructor(private route: ActivatedRoute, private http: Http, private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const body = {
        token: params['token']
      };
      const bodyJson = JSON.stringify(body);
      this.activateUser(bodyJson)
        .subscribe(
          data => {
            this.snackBar.open('Thank You. Your account has been successfully verified', 'OK');
          },
          error => {
            this.snackBar.open('There is a problem verifying your account. Please try again later');
          }
        )
    });
  }

  activateUser(body: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://www.ozmenta2k17.com/acitvateUser', body, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }
}