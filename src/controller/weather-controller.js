import axios from 'axios';
import Temperature from 'Modules/temperature';
import Wind from 'Modules/wind';
import Weather from 'Modules/weather';
import Zone from 'Modules/zone';
import moment from 'moment';

const openWeatherMapApiKey = 'deae8c6c4872e7bc487ec8348a3e1d70';

export const unitMode = {
  metric: 'Metric',
  imperial: 'Imperial'
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

  static getGeocodingData(response) {
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
      const data = WeatherController.getGeocodingData(response);
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
      if(error.message) throw error.message;
      else throw message;
    }
  }

  processWeatherData(weather) {
    let weatherData = weather;

    if (Array.isArray(weather)) {
      const first = 0;
      weatherData = weather[first];
    }

    // Set current weather
    this.weather.setCurrentWeather(weatherData.id,
                                   weatherData.main,
                                   weatherData.description,
                                   weatherData.icon);
  }

  processPrecipitationData(data) {
    const wid = this.weather.getCurrentWeather.id;

    // Set precipitation
    if (wid >= 600 && wid <= 699) { // Snow ID
      if(data.snow) this.weather.setPrecipitation = data.snow['1h'];
    } else if(data.rain) {
      this.weather.setPrecipitation = data.rain['1h'];
    }
  }

  precessData(data) {
    this.weather = new Weather();
    // Set weather information
    this.weather.setTemperature = new Temperature(data.main);
    this.weather.setWind = new Wind(data.wind);
    this.weather.setZone = this.zone;
    this.weather.setCloudiness = data.clouds.all;
    this.weather.setVisibility = data.visibility;
    // FIXME: invalid timezone
    this.weather.setCurrentTime = moment.unix(data.dt).format('HH:mm')
    this.weather.setDayTime(
      moment.unix(data.sys.sunset).format('HH:mm'),
      moment.unix(data.sys.sunrise).format('HH:mm')
    );
    this.processWeatherData(data.weather);
    this.processPrecipitationData(data);
  }

  toggleUnitSystem() {
    this.currentUnitMode = this.currentUnitMode === unitMode.metric ? unitMode.imperial : unitMode.metric;
  }

  isMetric() { return this.currentUnitMode === unitMode.metric; }

  isImperial() { return this.currentUnitMode === unitMode.imperial; }

  getCurrentUnitMode() { return this.currentUnitMode; }

  getLocation() {
    let locationString = `${this.zone.getCity}`;
    if(this.zone.getState) locationString += `, ${this.zone.getState}`;
    locationString += `, ${this.zone.getCountry}`;
    return locationString;
  }

  getCurrentTime() {
    return this.weather.getCurrentTime;
  }

  getWeatherTemperature() {
    return this.weather.getTemp.getTemperature(this.isMetric());
  }

  getWeatherWind() {
    return {
      direction: this.weather.getWind.getDirection,
      speed: this.weather.getWind.getSpeed(this.isMetric())
    }
  }

  getWeather() {
    return this.weather.getCurrentWeather;
  }

  getPrecipitation() {
    return this.weather.getPrecipitation(this.isMetric());
  }

  getWeatherExtraInfo() {
    return {
      dayTime: this.weather.getDayTime,
      cloudiness: this.weather.getCloudiness,
      pressure: this.weather.getTemp.getPressure(this.isMetric()),
      humidity: this.weather.getTemp.getHumidity,
      visibility: this.weather.getVisibility(this.isMetric())
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
      if(error.message) throw error.message;
      else throw message;
    }
  }
}
