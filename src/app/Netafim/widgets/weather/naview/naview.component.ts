import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfos } from 'src/app/Netafim/types';

@Component({
  selector: 'app-naview',
  templateUrl: './naview.component.html',
  styleUrls: ['./naview.component.css']
})
export class NAViewComponent implements OnInit {

  @Input() info:WeatherInfos[];
  constructor() { }

  ngOnInit() {
  }

}
