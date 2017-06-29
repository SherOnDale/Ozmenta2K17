import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomePageComponent implements AfterViewInit {

  @ViewChild('scene') sceneRef: ElementRef;

  constructor(private rd: Renderer2) {}
  
  ngAfterViewInit() {
  }
}