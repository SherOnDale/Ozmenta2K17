import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import Parallax from 'parallax-ng';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent implements AfterViewInit {

  @ViewChild('scene') sceneRef: ElementRef;
    scene = document.getElementById('scene');
    parallax = new Parallax(this.scene);

  constructor(private rd: Renderer2) {}
  
  ngAfterViewInit() {
    console.log(this.parallax);
  }
}