import {User} from '../models/user.model';
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  public loggedIn: Boolean = false;
  public activeUser = {
    token: ''
  };

  constructor(private http: Http) {
    if(this.isLoggedIn()) {
      this.activeUser.token = localStorage.getItem('token')
    }
  }
  
  registerUser(newUser: User) {
    const body = JSON.stringify(newUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://localhost:3000/registerUser', body, {
    return this.http.post('http://www.ozmenta2k17.com/registerUser', body, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  loginUser(loginUser: {email: string, password: string}) {
    const user = {
      email: loginUser.email,
      password: loginUser.password
    };
    const userJSON = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://localhost:3000/loginUser', userJSON, {
    return this.http.post('http://www.ozmenta2k17.com/loginUser', userJSON, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  registerEvent(data) {
    const body = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://www.ozmenta2k17.com/registerEvent', body, {
    // return this.http.post('http://localhost:3000/registerEvent', body, {
      headers: headers
    })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error));
  }

  cancelEvent(data) {
    const body = JSON.stringify(data);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://www.ozmenta2k17.com/cancelEvent', body, {
      headers: headers
    })
    .map((response: Response) => response.json())
    .catch((error: Response) => Observable.throw(error));
  }

  logoutUser() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }
  getToken() {
    return this.activeUser.token;
  }
}