import {Component, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent{
  constructor(public dialogRef: MdDialogRef<MoreComponent>, @Inject(MD_DIALOG_DATA) public data: any) {}
}