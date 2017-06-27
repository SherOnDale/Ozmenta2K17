import {User} from '../models/user.model';

export class UserService {
  private activeUser: User = {
    email: '',
    password: '',
    fname: '',
    lname: ''
  };

  setUser(newUser: User) {
    this.activeUser.email = newUser.email;
    this.activeUser.password = newUser.password;
    this.activeUser.fname = newUser.fname;
    this.activeUser.lname = newUser.lname;
  }

  getUser() {
    return this.activeUser;
  }

  removeUser() {
    this.activeUser.email = '';
    this.activeUser.password = '';
    this.activeUser.fname = '';
    this.activeUser.lname = '';
  }
}