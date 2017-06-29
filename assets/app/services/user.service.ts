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
    fName: '',
    lName: '',
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

  addUser(user: User) {
    this.email = user.email;
    this.password = user.password;
    this.fName = user.fName;
    this.lName = user.lName;
    this.phno = user.phno;
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
    this.activeUser.fName = '';
    this.activeUser.lName = '';
  }
}