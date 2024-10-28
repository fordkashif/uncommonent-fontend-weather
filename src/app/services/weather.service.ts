import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
  })
  export class WeatherService {
    private apiUrl = 'https://api.openweathermap.org/data/2.5';
    private historicalApiUrl = 'https://archive-api.open-meteo.com/v1/era5';
  
    constructor(private http: HttpClient) {}
  
    getCityCoordinates(city: string): Observable<{ lat: number, lon: number }> {
      return this.http.get<any>(`${this.apiUrl}/weather`, {
        params: new HttpParams()
          .set('q', city)
          .set('appid', environment.openWeatherApiKey)
      }).pipe(
        map(response => ({
          lat: response.coord.lat,
          lon: response.coord.lon
        }))
      );
    }
  
    getCurrentWeather(city: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/weather`, {
        params: new HttpParams()
          .set('q', city)
          .set('appid', environment.openWeatherApiKey)
          .set('units', 'metric')
      });
    }
  
    getFiveDayForecast(city: string): Observable<any> {
      return this.http.get(`${this.apiUrl}/forecast`, {
        params: new HttpParams()
          .set('q', city)
          .set('appid', environment.openWeatherApiKey)
          .set('units', 'metric')
      });
    }
  
    getHistoricalWeather(lat: number, lon: number, startDate: string, endDate: string): Observable<any> {
      return this.http.get(this.historicalApiUrl, {
        params: new HttpParams()
          .set('latitude', lat.toString())
          .set('longitude', lon.toString())
          .set('start_date', startDate)
          .set('end_date', endDate)
          .set('temperature_unit', 'celsius')
          .set('daily', 'temperature_2m_max,temperature_2m_min')
      });
    }
  }