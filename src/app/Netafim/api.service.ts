import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient } from "@angular/common/http";
import { City, WeatherInfos } from "./types";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";

const API_KEY = "1890fcd579ac51bb12f42af3ceed6428";

@Injectable({ providedIn: "root" })
export class ApiService {

    initial: City = {
      "id": 707860,
      "name": "Hurzuf",
      "country": "UA",
      "coord": {
          "lon": 34.283333,
          "lat": 44.549999
      }
    }
    
    initWeatherinfo: WeatherInfos;

    constructor(private http: HttpClient, private httpBackend: HttpBackend) {}

    loadInfo(): Promise<boolean> {
        // bypass HTTP interceptors by using HttpBackend
        const http = new HttpClient(this.httpBackend);
    
        return (
          http
            .get<WeatherInfos>(`https://api.openweathermap.org/data/2.5/weather?q=${this.initial.name},${this.initial.country}&units=metric&appid=${API_KEY}`)
            .toPromise()
            .then(response => {
              this.initWeatherinfo = response;
            })
            .then(_ => Promise.resolve(true))
            .catch(error => {
              console.error('Error loading info', error);
              return Promise.resolve(false);
            })
        );
      }

  getCities$: Observable<City[]> = this.http
    .get<City[]>("/assets/cities.json")
    .pipe(
      tap(r => console.log(r))
    );

  getWeather$ = (city: City): Observable<WeatherInfos> =>
    this.http
      .get<WeatherInfos>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.name},${
          city.country
        }&units=metric&appid=${API_KEY}`
      )
      .pipe(
        tap(r => console.log(r))
      );
}