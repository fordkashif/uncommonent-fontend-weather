import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './components/search/search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HistoricalWeatherComponent } from './components/historical-weather/historical-weather.component';
import { WeatherService } from './services/weather.service';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    SearchComponent,
    TabViewModule,
    CurrentWeatherComponent,
    ForecastComponent,
    HistoricalWeatherComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [WeatherService]
})
export class AppComponent {
  currentWeather: any = null;
  forecast: any[] = [];
  historicalData: any[] = [];
  errorMessage: string = '';
  showErrorScreen: boolean = false;

  constructor(private weatherService: WeatherService) {}

  onCitySearched(cityName: string) {
    this.errorMessage = ''; 
    this.showErrorScreen = false;
    this.getWeatherData(cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getCurrentWeather(cityName).subscribe({
      next: (data) => {
        this.currentWeather = data;
        this.errorMessage = '';
        this.showErrorScreen = false; 
      },
      error: () => {
        this.errorMessage = 'City not found or API limit reached.';
        this.showErrorScreen = true;
      }
    });

    this.weatherService.getFiveDayForecast(cityName).subscribe({
      next: (data) => {
        this.forecast = data.list.filter((entry: any) => {
          const date = new Date(entry.dt * 1000); 
          return date.getHours() === 13;
        }).slice(0, 5);     
      },
      error: () => (this.errorMessage = 'Failed to load forecast data.')
    });
    

    // Fetch historical data
    this.weatherService.getCityCoordinates(cityName).subscribe({
      next: (coords) => {
        const startDate = '2023-01-01';
        const endDate = '2024-10-28';
        this.weatherService.getHistoricalWeather(coords.lat, coords.lon, startDate, endDate).subscribe({
          next: (data) => {
            if (data.daily && data.daily.time && data.daily.temperature_2m_max && data.daily.temperature_2m_min) {
              // Transform data.daily into an array of objects with date, temperature_2m_max, and temperature_2m_min
              this.historicalData = data.daily.time.map((date: string, index: number) => ({
                date: date,
                temperature_2m_max: data.daily.temperature_2m_max[index],
                temperature_2m_min: data.daily.temperature_2m_min[index]
              }));
              console.log('Transformed Historical Data:', this.historicalData);
            } else {
              console.error('Data format is incorrect:', data);
              this.errorMessage = 'Failed to load historical data due to incorrect data format.';
            }
          },
          error: () => (this.errorMessage = 'Failed to load historical data.')
        });
      },
      error: () => (this.errorMessage = 'Failed to load coordinates for historical data.')
    });
  }
  clearError() {
    this.showErrorScreen = false;
  }
}
