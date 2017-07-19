import { Component, OnInit } from '@angular/core';
import {MoreService} from '../../services/more.service';
import {UserService} from '../../services/user.service';
import {More} from '../../models/more.model';
import { MdDialog, MdDialogConfig, MdSnackBar } from '@angular/material';
import {MoreComponent} from '../more/more.component';
import {RegisterEventComponent} from '../registerevent/registerevent.component';
import {CancelEventComponent} from '../cancelevent/cancelevent.component';

@Component({
  selector: 'app-workshoppage',
  templateUrl: './workshoppage.component.html',
  styleUrls: ['./workshop.component.css']
})

export class WorkshopPageComponent implements OnInit {
  constructor(private moreService: MoreService, private dialog: MdDialog, private snackBar: MdSnackBar, private userService: UserService) {}
  data: More[];
  nteventsRegistered = {
    e11: false,
    e12: false,
    e13: false
  };

  ngOnInit() {
    this.data = this.moreService.getWMore();
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
              localStorage.setItem('eventsRegistered', data.eventsRegistered);
              this.nteventsRegistered.e11 = data.eventsRegistered.e11;
              this.nteventsRegistered.e12 = data.eventsRegistered.e12;
              this.nteventsRegistered.e13 = data.eventsRegistered.e13;
              this.snackBar.open('Successfully Registerd', 'OK');
            }, 
            error => {
              this.snackBar.open('Registration Faled. Please Try Again Later', 'OK');
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
              this.nteventsRegistered.e11 = data.eventsRegistered.e11;
              this.nteventsRegistered.e12 = data.eventsRegistered.e12;
              this.nteventsRegistered.e13 = data.eventsRegistered.e13;
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