import {User} from '../models/user.model';
import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {
  private activeUser: User = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    phno: undefined
  };

  constructor(private http: Http) {}
  
  registerUser(newUser: User) {
    const body = JSON.stringify(newUser);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/registerUser', body, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  getUser() {
    return this.activeUser;
  }

  loginUser({email, password}) {
    const user = {
      email: email,
      password: password
    };
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/loginUser', user, {
      headers: headers
    })
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw(error));
  }

  removeUser() {
    this.activeUser.email = '';
    this.activeUser.password = '';
    this.activeUser.fname = '';
    this.activeUser.lname = '';
  }
}