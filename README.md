
# Weather Dashboard 🌦

A feature-rich, responsive weather dashboard built with **Angular** and **PrimeNG**. This application allows users to search for weather information by city, displaying current weather conditions, a 5-day forecast, and historical weather data with intuitive UI and weather icons.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Reference](#api-reference)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Features

- **Current Weather:** Displays the current temperature, weather condition, day and night temperatures, location, and time.
- **5-Day Forecast:** Shows maximum and minimum temperatures, weather conditions, and icons for each day.
- **Historical Weather Data:** Displays temperature highs and lows for the past year, with pagination for easy navigation.
- **Responsive Design:** Fully responsive for mobile, tablet, and desktop devices.
- **Dynamic Backgrounds:** Background colors and icons change dynamically based on weather conditions.
- **Enter Key Search:** Allows users to press Enter to initiate a search for weather data.

## Tech Stack

- **Frontend Framework:** Angular 17 with PrimeNG
- **API:** OpenWeatherMap API for current and forecast data, Open-Meteo API for historical weather data
- **CSS Framework:** PrimeNG, custom SCSS for styling
- **Icons:** Weather Icons by Erik Flowers, PrimeNG icons

## Installation

### Prerequisites

- **Node.js** (version >= 14)
- **Angular CLI** (version >= 15)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/weather-dashboard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd weather-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up API keys:
   - Register on [OpenWeatherMap](https://openweathermap.org/) and [Open-Meteo](https://open-meteo.com/) to obtain API keys.
   - Create an `environment.ts` file in `src/environments/` and add your API keys:

     ```typescript
     export const environment = {
       production: false,
       openWeatherApiKey: 'YOUR_OPENWEATHERMAP_API_KEY',
       openMeteoApiKey: 'YOUR_OPEN_METEO_API_KEY'
     };
     ```

5. Start the development server:

   ```bash
   ng serve
   ```

6. Open your browser and navigate to `http://localhost:4200`.

## Usage

1. Enter a city name in the search bar and press Enter or click Search.
2. View the current weather, 5-day forecast, or historical data by switching tabs.
3. Click on the pagination controls in the Historical Data tab to view more data.

### Keyboard Shortcuts

- **Enter**: Start a new search from the input field.

## Project Structure

```bash
weather-dashboard/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── current-weather/     # Current Weather Component
│   │   │   ├── forecast/            # Forecast Component
│   │   │   ├── historical-weather/  # Historical Weather Component
│   │   │   └── search/              # Search Component
│   │   ├── services/
│   │   │   └── weather.service.ts   # Weather Service for API requests
│   │   │   └── weather-utils.service.ts # Utilities for icons and conditions
│   │   ├── app.component.ts         # Main Application Component
│   │   └── app.module.ts            # Module declaration
│   ├── environments/
│   │   └── environment.ts           # Environment variables (API keys)
│   └── assets/
│       └── icons/                   # Weather icons
└── README.md
```

## API Reference

This app uses the following endpoints:

1. **OpenWeatherMap API**
   - **Current Weather**: `https://api.openweathermap.org/data/2.5/weather`
   - **5-Day Forecast**: `https://api.openweathermap.org/data/2.5/forecast`

2. **Open-Meteo API**
   - **Historical Weather Data**: `https://archive-api.open-meteo.com/v1/era5`

### Example Request

```bash
GET https://api.openweathermap.org/data/2.5/weather?q={CITY_NAME}&appid={API_KEY}&units=metric
```

### Error Handling

- **401 Unauthorized**: API key is missing or incorrect.
- **404 Not Found**: City not found.
- **500 Server Error**: Internal API error; try again later.

## Acknowledgements

- **Icons**: [Weather Icons](https://erikflowers.github.io/weather-icons/)
- **Data API**: [OpenWeatherMap](https://openweathermap.org/), [Open-Meteo](https://open-meteo.com/)
- **PrimeNG**: A rich set of open-source UI components for Angular.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.