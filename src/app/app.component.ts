import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from './Netafim/api.service';
import {  WeatherInfos } from './Netafim/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  clicked:boolean;
  title = 'app';
  _$initialData:WeatherInfos;
  constructor(private apiService: ApiService) {
    this._$initialData = apiService.initWeatherinfo;
  }
  
  ngOnInit() { 
    this.clicked = false;
  }
}
