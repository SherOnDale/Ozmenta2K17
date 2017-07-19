import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdSnackBar} from '@angular/material';
import {MoreService} from '../../services/more.service';
import {UserService} from '../../services/user.service';
import {More} from '../../models/more.model';
import {MoreComponent} from '../more/more.component';
import {RegisterEventComponent} from '../registerevent/registerevent.component';
import {CancelEventComponent} from '../cancelevent/cancelevent.component';

@Component({
  selector: 'app-nteventpage',
  templateUrl: './nteventpage.component.html',
  styleUrls: ['./nteventpage.component.css']
})

export class NTEventPageComponent implements OnInit {
  data: More[];
  nteventsRegistered = {
    e31: false,
    e32: false,
    e33: false,
    e34: false,
    e35: false,
    e36: false
  };

    ngOnInit() {
    this.data = this.moreService.getNMore();
    if(localStorage.getItem('token')) {
      this.nteventsRegistered.e31 = JSON.parse(localStorage.getItem('e31'));
      this.nteventsRegistered.e32 = JSON.parse(localStorage.getItem('e32'));
      this.nteventsRegistered.e33 = JSON.parse(localStorage.getItem('e33'));
      this.nteventsRegistered.e34 = JSON.parse(localStorage.getItem('e34'));
      this.nteventsRegistered.e35 = JSON.parse(localStorage.getItem('e35'));
      this.nteventsRegistered.e36 = JSON.parse(localStorage.getItem('e36'));
    }
  }

    constructor(private moreService: MoreService, private dialog: MdDialog, private userService: UserService, private snackBar: MdSnackBar) {}

    openConfirmation(eventId) {
      const dialogRef = this.dialog.open(RegisterEventComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result == "confirm") {
        const body = {
          eventId: eventId,
          token: this.userService.getToken()
        };
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
              this.nteventsRegistered.e31 = data.eventsRegistered.e31;
              this.nteventsRegistered.e32 = data.eventsRegistered.e32;
              this.nteventsRegistered.e33 = data.eventsRegistered.e33;
              this.nteventsRegistered.e34 = data.eventsRegistered.e34;
              this.nteventsRegistered.e35 = data.eventsRegistered.e35;
              this.nteventsRegistered.e36 = data.eventsRegistered.e36;
              console.log(data.eventsRegistered);
              console.log(data.eventsRegistered.e31);
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
              localStorage.setItem('eventsRegistered', data.eventsRegistered);
              this.nteventsRegistered.e31 = data.eventsRegistered.e31;
              this.nteventsRegistered.e32 = data.eventsRegistered.e32;
              this.nteventsRegistered.e33 = data.eventsRegistered.e33;
              this.nteventsRegistered.e34 = data.eventsRegistered.e34;
              this.nteventsRegistered.e35 = data.eventsRegistered.e35;
              this.nteventsRegistered.e36 = data.eventsRegistered.e36;
              this.snackBar.open('Your Registration Is Cancelled', 'OK');
              },
            error => {
              this.snackBar.open('Cancellation Failed. Please Try Again Later', 'OK');
            }
            );
        }
      });
  }

  openDialog(data) {
    const config = new MdDialogConfig();
    config.data = data;
    const dialogRef = this.dialog.open(MoreComponent, config);
  }
}