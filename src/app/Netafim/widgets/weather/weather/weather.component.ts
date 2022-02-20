import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfos } from 'src/app/Netafim/types';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  @Input() info:WeatherInfos[];
  constructor() { }

  ngOnInit() {
  }

}
