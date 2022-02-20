import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { City, WeatherInfos } from '../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cities: City[] = [];
  _$initialData:WeatherInfos;
  constructor(private apiService: ApiService) {
    this._$initialData = apiService.initWeatherinfo;
  }
  
  ngOnInit() {
    this.apiService.getCities$.subscribe(
      res => this.cities.push(...res)
    );
  }
}
