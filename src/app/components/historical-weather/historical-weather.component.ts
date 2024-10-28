import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { WeatherUtilsService } from '../../services/weather-utils.service';

@Component({
  selector: 'app-historical-weather',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './historical-weather.component.html',
  styleUrls: ['./historical-weather.component.scss']
})
export class HistoricalWeatherComponent implements OnChanges{
  @Input() data: any[] = [];

  currentPage: number = 1;
  pageSize: number = 10;
  paginatedData: any[] = [];

  constructor(private weatherUtils: WeatherUtilsService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.updatePaginatedData();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  updatePaginatedData(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.data.slice(startIndex, endIndex);
  }

  goToNextPage(): void {
    if (this.currentPage < Math.ceil(this.data.length / this.pageSize)) {
      this.currentPage++;
      this.updatePaginatedData();
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedData();
    }
  }
  
}
