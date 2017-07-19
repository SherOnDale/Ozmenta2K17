import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {MoreService} from '../../services/more.service';
import {More} from '../../models/more.model';
import {MoreComponent} from '../more/more.component';
import {RegisterEventComponent} from '../registerevent/registerevent.component';

@Component({
  selector: 'app-eventpage',
  templateUrl: './teventpage.component.html',
  styleUrls: ['./teventpage.component.css']
})

export class TEventPageComponent implements OnInit {
  data: More[];

    ngOnInit() {
    this.data = this.moreService.getTMore();
  }

    constructor(private moreService: MoreService, private dialog: MdDialog) {}

  openDialog(data) {
    const config = new MdDialogConfig();
    config.data = data;
    const dialogRef = this.dialog.open(MoreComponent, config);
  }

  openConfirmation() {
    const dialogRef = this.dialog.open(RegisterEventComponent);
  }
}