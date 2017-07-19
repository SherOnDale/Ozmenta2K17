import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdSnackBar} from '@angular/material';
import {MoreService} from '../../services/more.service';
import {UserService} from '../../services/user.service';
import {More} from '../../models/more.model';
import {MoreComponent} from '../more/more.component';
import {RegisterEventComponent} from '../registerevent/registerevent.component';
import {CancelEventComponent} from '../cancelevent/cancelevent.component';

@Component({
  selector: 'app-eventpage',
  templateUrl: './teventpage.component.html',
  styleUrls: ['./teventpage.component.css']
})

export class TEventPageComponent implements OnInit {
  data: More[];
  nteventsRegistered = {
    e21: false,
    e22: false,
    e23: false,
    e24: false,
    e25: false,
    e26: false
  };

    ngOnInit() {
    this.data = this.moreService.getTMore();
    if(localStorage.getItem('token')) {
      this.nteventsRegistered.e21 = JSON.parse(localStorage.getItem('e21'));
      this.nteventsRegistered.e22 = JSON.parse(localStorage.getItem('e22'));
      this.nteventsRegistered.e23 = JSON.parse(localStorage.getItem('e23'));
      this.nteventsRegistered.e24 = JSON.parse(localStorage.getItem('e24'));
      this.nteventsRegistered.e25 = JSON.parse(localStorage.getItem('e25'));
      this.nteventsRegistered.e26 = JSON.parse(localStorage.getItem('e26'));
    }
  }

    constructor(private moreService: MoreService, private dialog: MdDialog, private userService: UserService, private snackBar: MdSnackBar) {}

  openDialog(data) {
    const config = new MdDialogConfig();
    config.data = data;
    const dialogRef = this.dialog.open(MoreComponent, config);
  }

  openConfirmation(eventId) {
    const dialogRef = this.dialog.open(RegisterEventComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == "confirm") {
        const body = {
          eventId: eventId,
          token: this.userService.getToken()
        }
        this.userService.registerEvent(body)
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
              this.nteventsRegistered.e21 = data.eventsRegistered.e21;
              this.nteventsRegistered.e22 = data.eventsRegistered.e22;
              this.nteventsRegistered.e23 = data.eventsRegistered.e23;
              this.nteventsRegistered.e24 = data.eventsRegistered.e24;
              this.nteventsRegistered.e25 = data.eventsRegistered.e25;
              this.nteventsRegistered.e26 = data.eventsRegistered.e26;
              this.snackBar.open('Successfully Registerd', 'OK');
            }, 
            error => {
              this.snackBar.open('Registration Faled. Please Try Again Later', 'OK');
            }
          );
      }
    });
  }

  cancelRegistration(eventId) {
      const dialogRef = this.dialog.open(CancelEventComponent);
      dialogRef.afterClosed().subscribe(result => {
        if(result == "confirm") {
          const body = {
            eventId: eventId,
            token: this.userService.getToken()
          };
          this.userService.cancelEvent(body)
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
              this.nteventsRegistered.e21 = data.eventsRegistered.e21;
              this.nteventsRegistered.e22 = data.eventsRegistered.e22;
              this.nteventsRegistered.e23 = data.eventsRegistered.e23;
              this.nteventsRegistered.e24 = data.eventsRegistered.e24;
              this.nteventsRegistered.e25 = data.eventsRegistered.e25;
              this.nteventsRegistered.e26 = data.eventsRegistered.e26;
              this.snackBar.open('Your Registration Is Cancelled', 'OK');
              },
            error => {
              this.snackBar.open('Cancellation Failed. Please Try Again Later', 'OK');
            }
            );
        }
      });
  }
}