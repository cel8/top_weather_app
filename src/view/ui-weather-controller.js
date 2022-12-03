import { WeatherController, geocodingMode, unitMode } from 'Controller/weather-controller';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import InputManager from 'Utilities/input-manager';
import 'Svg/city.svg';
import 'Svg/wind-navigation.svg';

const main = document.querySelector('main');

export default class UiWeatherController {
  constructor() {
    this.weatherController = new WeatherController();
    this.locationCity = true;
  }

  createMainSection() {
    this.createSearchSection();
    UiWeatherController.createWeatherSection();
  }

  static createWeatherSection() {
    const divWeatherGrid = DomManager.createNode('div', 'main-weather-grid');
    // Location
    const divLocation = DomManager.createNode('p', 'main-location');
    // Weather
    const divWeather = DomManager.createNode('div', 'main-weather');
    // Temperature
    const divTemperature = DomManager.createNode('div', 'main-temperature-container');
    DomManager.createAddNode('p', divTemperature, 'main-temperature');
    const divTemperatureInfo = DomManager.createAddNode('div', divTemperature)
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-max');
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-feels');
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-min');
    // Other information grid
    const divWeatherInfoGrid = DomManager.createNode('div', 'main-weather-info-grid');
    // Header bar
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-header', null, 'Cloudiness');
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-header', null, 'Humidity');
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-header', null, 'Pressure');
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-header', null, 'Wind');
    // Registration
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-cloudiness');
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-humidity');
    DomManager.createAddNode('p', divWeatherInfoGrid, 'grid-pressure');
    const divWind = DomManager.createAddNode('div', divWeatherInfoGrid, 'grid-wind');
    DomManager.addNodeChild(divWind, ButtonManager.createImageButton('wind-navigation.svg', 'grid-wind-direction'));
    DomManager.createAddNode('p', divWind, 'grid-wind-speed');
    // Add section to main
    DomManager.addNodeChild(main, divWeatherGrid);
    DomManager.addNodeChild(divWeatherGrid, divLocation);
    DomManager.addNodeChild(divWeatherGrid, divWeather);
    DomManager.addNodeChild(divWeatherGrid, divTemperature);
    DomManager.addNodeChild(divWeatherGrid, divWeatherInfoGrid);
    // Hide weather node
    DomManager.toggleDisplayByNode(divWeatherGrid);
  }

  cbChangePlaceholder() {
    const editText = main.querySelector('#searchBarID');
    // Toggle operation
    this.locationCity = !this.locationCity;
    // Setup content
    const placeholder = this.locationCity ? 'City name, state, country.'
                                          : 'Zip, country.';
    editText.setAttribute('placeholder', placeholder);
  }

  displayWind() {
    const objWind = this.weatherController.getWeatherWind();
    const imgWindDirection = document.querySelector('.grid-wind-direction > img');
    imgWindDirection.style.transform = `rotate(${objWind.direction}deg)`;
    document.querySelector('.grid-wind-speed').textContent = objWind.speed;
  }

  displayTemperature() {
    const objTemperature = this.weatherController.getWeatherTemperature();
    document.querySelector('.main-temperature').textContent = objTemperature.temp;
    document.querySelector('.main-temperature-max').textContent = objTemperature.max;
    document.querySelector('.main-temperature-feels').textContent = objTemperature.feels;
    document.querySelector('.main-temperature-min').textContent = objTemperature.min;
  }

  displayWeather() {
    const divWeatherGrid = document.querySelector('.main-weather-grid');
    document.querySelector('.main-location').textContent = this.weatherController.getLocation();
    this.displayTemperature();
    this.displayWind();
    // Show weather node
    DomManager.toggleDisplayByNode(divWeatherGrid);
  }

  async cbSearchEvent(event) {
    event.preventDefault();
    const form = main.querySelector('form');
    const pErrorCode = form.querySelector('p');
    try {
      const editText = main.querySelector('#searchBarID');
      const mode = this.locationCity ? geocodingMode.location : geocodingMode.zip;
      await this.weatherController.geocodingLocation(editText.value, mode);
      pErrorCode.textContent = '';
      await this.weatherController.fetchWeather();
      this.displayWeather();
    } catch(message) {
      pErrorCode.textContent = message;
    }
  }

  createSearchSection() {
    const divSearch = DomManager.createNode('div', 'main-search-weather');
    const form = DomManager.createAddNode('form', main, 'search-bar');
    const editText = InputManager.createEditText('searchBarID', 'City name, state, country.');
    const pErrorCode = DomManager.createNodeContent('p', '', 'form-error');
    const btnSubmit = InputManager.createButton('submitID', 'Submit', null, 'formBtn', (e) => { this.cbSearchEvent(e); }, form);
    const btnCity = ButtonManager.createImageButton('city.svg', 'weather-button', () => { this.cbChangePlaceholder(); });

    // Add form objects
    DomManager.addNodeChild(form, editText.input);
    DomManager.addNodeChild(form, pErrorCode);
    DomManager.addNodeChild(form, btnSubmit.input);

    // Add section to main
    DomManager.addNodeChild(main, divSearch);
    DomManager.addNodeChild(divSearch, form);
    DomManager.addNodeChild(divSearch, btnCity);
  }
}
