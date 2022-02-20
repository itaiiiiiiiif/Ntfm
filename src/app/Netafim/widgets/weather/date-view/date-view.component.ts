import { Component, Input, OnInit } from '@angular/core';
import { WeatherInfos } from 'src/app/Netafim/types';

@Component({
  selector: 'app-date-view',
  templateUrl: './date-view.component.html',
  styleUrls: ['./date-view.component.css']
})
export class DateViewComponent implements OnInit {

  @Input() info:WeatherInfos;
  dateView:Date;

  constructor() { }

  ngOnInit() {
      this.dateView = new Date();
  }

}
