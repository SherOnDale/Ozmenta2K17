import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogConfig} from '@angular/material';
import {MoreService} from '../../services/more.service';
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

    constructor(private moreService: MoreService, private dialog: MdDialog) {}

    openConfirmation() {
      const dialogRef = this.dialog.open(RegisterEventComponent);
    }

  openDialog(data) {
    const config = new MdDialogConfig();
    config.data = data;
    const dialogRef = this.dialog.open(MoreComponent, config);
  }
}