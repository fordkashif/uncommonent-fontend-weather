import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherUtilsService } from '../../services/weather-utils.service';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnChanges {
  @Input() data: any;
  weatherClass: string = 'default-weather';

  constructor(private weatherUtils: WeatherUtilsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data && this.data.weather) {
      this.weatherClass = this.weatherUtils.getWeatherConditionClass(this.data.weather[0]?.main || 'default');
      console.log(`Updated Weather Class: ${this.weatherClass}`);
    }
  }

  getWeatherIcon(condition: string): string {
    return this.weatherUtils.getWeatherIcon(condition);
  }
}
