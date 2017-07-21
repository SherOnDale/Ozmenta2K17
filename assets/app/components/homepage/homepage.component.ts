import { Component} from '@angular/core';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent {
  lat: number = 13.150779;
  lng: number = 80.191553;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'fb',
        sanitizer.bypassSecurityTrustResourceUrl('/images/fb.svg'));
  }
}