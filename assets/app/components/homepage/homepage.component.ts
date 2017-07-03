import { Component, OnInit} from '@angular/core';
import 'jquery';
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
    $(document).ready(function() {
        $('section[data-type="background"]').each(function () {
            var $bgobj = $(this);
            $(window).scroll(function () {
                var yPos = -($(window).scrollTop() / $bgobj.data('speed'));
                var coords = '50% ' + yPos + 'px';
                $bgobj.css({backgroundPosition: coords});
            });
        });
    });
  }
}