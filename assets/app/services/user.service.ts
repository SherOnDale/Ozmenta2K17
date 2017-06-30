import {User} from '../models/user.model';
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  public loggedIn: Boolean = false;
  public activeUser: User = {
    email: '',
    password: '',
    fName: '',
    lName: '',
    phno: undefined
  };

  constructor(private http: Http) {}
  
  registerUser(newUser: User) {
    const body = JSON.stringify(newUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://localhost:3000/registerUser', body, {
    return this.http.post('https://ozmenta2k17.herokuapp.com/registerUser', body, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  addUser(user: User) {
    this.activeUser.email = user.email;
    this.activeUser.password = user.password;
    this.activeUser.fName = user.fName;
    this.activeUser.lName = user.lName;
    this.activeUser.phno = user.phno;
  }

  loginUser(loginUser: {email: string, password: string}) {
    alert('this function is called');
    const user = {
      email: loginUser.email,
      password: loginUser.password
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    // return this.http.post('http://localhost:3000/loginUser', user, {
    return this.http.post('https://ozmenta2k17.herokuapp.com/loginUser', user, {
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
}