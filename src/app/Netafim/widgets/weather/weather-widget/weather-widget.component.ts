import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Netafim/api.service';
import { City, WeatherInfos } from 'src/app/Netafim/types';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {

  @Input() placesToSearch:City[] = [];
  @Input() initial:City;
  selectedPlace:City;
  weatherInfo: WeatherInfos = null;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    console.log(this.placesToSearch);
    if(!this.placesToSearch.length) {
      this.apiService.getCities$
      .subscribe(res => 
        this.placesToSearch.push(...res)
      );
    }
  }

  onPlaceChange(placeId) {
    if(placeId && !isNaN(placeId)) {
      this.selectedPlace =  this.placesToSearch.find(place => place.id === placeId);
      if(this.selectedPlace) {
        this.apiService.getWeather$(this.selectedPlace)
        .subscribe(res => 
          this.weatherInfo = res
        );
      }
    }
    console.log(placeId);
  }

}
