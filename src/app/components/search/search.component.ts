import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  cityName: string = '';

  @Output() citySearched = new EventEmitter<string>();

  searchCity() {
    if (this.cityName.trim()) {
      this.citySearched.emit(this.cityName);
    }
  }
}
