import axios from 'axios';
import { Temperature, tempUnit } from 'Modules/temperature';
import { Wind, windUnit } from 'Modules/wind';
import Weather from 'Modules/weather';
import Zone from 'Modules/zone';

const openWeatherMapApiKey = 'deae8c6c4872e7bc487ec8348a3e1d70';

export const unitMode = {
  metric: 'metric',
  imperial: 'imperial'
}

export const geocodingMode = {
  location: 1,
  zip: 2
};

export class WeatherController {
  constructor() {
    this.zone = undefined;
    this.weather = undefined;
    this.currentUnitMode = unitMode.metric;
  }

  static getGeocodingString(location, mode) {
    let geocodeString;

    if (mode === geocodingMode.location) { // Location
      geocodeString = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${openWeatherMapApiKey}`;
    } else { // ZIP
      geocodeString = `http://api.openweathermap.org/geo/1.0/zip?zip=${location}&appid=${openWeatherMapApiKey}`;
    }

    return geocodeString;
  }

  static getGeocodingJson(response) {
    let geocode;

    if (Array.isArray(response.data)) {
      const first = 0;
      geocode = response.data[first];
    } else {
      geocode = response.data;
    }

    return geocode;
  }

  async geocodingLocation(location, mode) {
    const message = `Cannot find this location '${location}'.`;

    try {
      const geocodeString = WeatherController.getGeocodingString(location, mode);
      const response = await axios.get(geocodeString);
      const data = WeatherController.getGeocodingJson(response);
      if(!data) throw message;

      this.zone = new Zone(
        data.name,
        data.country,
        data.state,
        data.lon,
        data.lat
      );
      
      return this.zone;
    } catch(error) {
      throw message;
    }
  }

  precessData(data) {
    this.weather = new Weather();
    // Set weather information
    this.weather.setTemperature = new Temperature(data.main);
    this.weather.setWind = new Wind(data.wind);
    this.weather.setZone = this.zone;
    console.log(this.weather);
  }

  getLocation() {
    let locationString = `${this.zone.getCity}`;
    if(this.zone.getState) locationString += `, ${this.zone.getState}`;
    locationString += `, ${this.zone.getCountry}`;
    return locationString;
  }

  getWeatherTemperature() {
    const unit = this.currentUnitMode === unitMode.metric ? tempUnit.c : tempUnit.f;
    return this.weather.getTemp.getTemperature(unit);
  }

  getWeatherWind() {
    const unit = this.currentUnitMode === unitMode.metric ? windUnit.kmh : windUnit.mph;
    return {
      direction: this.weather.getWind.getDirection,
      speed: this.weather.getWind.getSpeed(unit)
    }
  }

  async fetchWeather() {
    const message = `Cannot fetch the current weather for '${this.zone.getCity}`;

    try {
      const lat = this.zone.getCoordinate().latitude;
      const lon = this.zone.getCoordinate().longitude;
      const apiUrl = 'https://api.openweathermap.org/data/2.5/';
      const units = 'metric';
      const apiCallString = `${apiUrl}weather?lat=${lat}&lon=${lon}&units=${units}&appid=${openWeatherMapApiKey}`;
      const response = await axios.get(apiCallString);
      this.precessData(response.data);
      return this.weather;
    } catch(error) {
      throw message;
    }
  }
}
