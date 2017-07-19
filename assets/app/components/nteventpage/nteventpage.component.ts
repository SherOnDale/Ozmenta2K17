import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig, MdSnackBar} from '@angular/material';
import {MoreService} from '../../services/more.service';
import {UserService} from '../../services/user.service';
import {More} from '../../models/more.model';
import {MoreComponent} from '../more/more.component';
import {RegisterEventComponent} from '../registerevent/registerevent.component';

@Component({
  selector: 'app-nteventpage',
  templateUrl: './nteventpage.component.html',
  styleUrls: ['./nteventpage.component.css']
})

export class NTEventPageComponent implements OnInit {
  data: More[];

    ngOnInit() {
    this.data = this.moreService.getNMore();
  }

    constructor(private moreService: MoreService, private dialog: MdDialog, private userService: UserService, private snackBar: MdSnackBar) {}

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
}