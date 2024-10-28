import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherUtilsService {
  getWeatherIcon(condition: string): string {
    const normalizedCondition = condition?.toLowerCase() || '';

    if (normalizedCondition.includes('clear')) return 'wi wi-day-sunny';
    if (normalizedCondition.includes('clouds')) return 'wi wi-cloudy';
    if (normalizedCondition.includes('rain')) return 'wi wi-rain';
    if (normalizedCondition.includes('drizzle')) return 'wi wi-sprinkle';
    if (normalizedCondition.includes('thunderstorm')) return 'wi wi-thunderstorm';
    if (normalizedCondition.includes('snow')) return 'wi wi-snow';
    if (normalizedCondition.includes('mist') || normalizedCondition.includes('fog')) return 'wi wi-fog';
    if (normalizedCondition.includes('smoke') || normalizedCondition.includes('haze')) return 'wi wi-day-haze';
    if (normalizedCondition.includes('dust') || normalizedCondition.includes('sand') || normalizedCondition.includes('ash')) return 'wi wi-dust';
    if (normalizedCondition.includes('tornado')) return 'wi wi-tornado';
    if (normalizedCondition.includes('squall')) return 'wi wi-strong-wind';

    return 'wi wi-na'; // Default icon for unknown or undefined conditions
  }

  getWeatherConditionClass(condition: string): string {
    const normalizedCondition = condition?.toLowerCase() || 'default';

    if (normalizedCondition.includes('clear')) return 'sunny';
    if (normalizedCondition.includes('cloud')) return 'cloudy';
    if (normalizedCondition.includes('rain')) return 'rainy';
    if (normalizedCondition.includes('drizzle')) return 'rainy';
    if (normalizedCondition.includes('thunderstorm')) return 'stormy';
    if (normalizedCondition.includes('snow')) return 'snowy';
    if (normalizedCondition.includes('mist') || normalizedCondition.includes('fog')) return 'foggy';
    if (normalizedCondition.includes('smoke') || normalizedCondition.includes('haze')) return 'hazy';
    if (normalizedCondition.includes('dust') || normalizedCondition.includes('sand') || normalizedCondition.includes('ash')) return 'dusty';
    if (normalizedCondition.includes('tornado')) return 'tornado';
    if (normalizedCondition.includes('squall')) return 'windy';

    return 'default-weather'; // Default class if condition is undefined
  }
}
