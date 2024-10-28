import { Component, Input } from '@angular/core';
import { WeatherUtilsService } from '../../services/weather-utils.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent {
  @Input() data: any[] | undefined;

  constructor(private weatherUtils: WeatherUtilsService) {}

  getWeatherIcon(condition: string): string {
    return this.weatherUtils.getWeatherIcon(condition);
  }

  getWeatherConditionClass(condition: string): string {
    return this.weatherUtils.getWeatherConditionClass(condition);
  }
}
