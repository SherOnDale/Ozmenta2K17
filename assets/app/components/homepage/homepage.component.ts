import { Component, OnInit} from '@angular/core';
import Parallax from './parallax.js';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent implements OnInit{

  scene: any;

  constructor() {
  }

  ngOnInit() {
    this.scene = document.getElementById('scene');
    console.log(this.scene);
    const parallax = new Parallax(this.scene);
  }
}