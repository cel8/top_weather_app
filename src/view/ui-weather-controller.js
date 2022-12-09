import { WeatherController, geocodingMode } from 'Controller/weather-controller';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import InputManager from 'Utilities/input-manager';
import 'Svg/city.svg';
import 'Svg/sunset.svg';
import 'Svg/sunrise.svg';
import 'Svg/magnify.svg';
import 'Svg/wind-navigation.svg';

const main = document.querySelector('main');
const header  = document.querySelector('header');

export default class UiWeatherController {
  static #hasWeather = false;

  constructor() {
    this.weatherController = new WeatherController();
    this.locationCity = true;
    this.cbUpdateWeatherTimer = undefined;
  }

  static #setWeather(state) { this.#hasWeather = state; }

  static #getWeather() { return this.#hasWeather; }

  static createMainSection() {
    UiWeatherController.#createWeatherSection();
  }

  static #createWeatherSection() {
    const divWeatherGrid = DomManager.createNode('div', 'main-weather-grid');
    // Location
    const divLocation = DomManager.createNode('p', 'main-location');
    const divCurrentTime = DomManager.createNode('p', 'main-current-time');
    // Weather
    const divWeather = DomManager.createNode('div', 'main-weather');
    DomManager.createAddNodeImg('', 'weather-icon', divWeather, 'main-weather-icon', null, false);
    const divWeatherName = DomManager.createAddNode('div', divWeather);
    DomManager.createAddNode('p', divWeatherName, 'main-weather-name');
    DomManager.createAddNode('p', divWeatherName, 'main-weather-description');
    const divPrecipitation = DomManager.createNode('div', 'main-weather-precipitation');
    DomManager.createAddNode('p', divPrecipitation, 'grid-header', null, 'Precipitation');
    DomManager.createAddNode('p', divPrecipitation, 'grid-precipitation');
    DomManager.addNodeChild(divWeather, divPrecipitation);
    // Temperature
    const divTemperature = DomManager.createNode('div', 'main-temperature-container');
    DomManager.createAddNode('p', divTemperature, 'main-temperature');
    const divTemperatureInfo = DomManager.createAddNode('div', divTemperature)
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-max');
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-feels');
    DomManager.createAddNode('p', divTemperatureInfo, 'main-temperature-min');
    // Other information grid
    const divWeatherInfoGridPrimary = DomManager.createNode('div', 'main-weather-info-grid-primary');
    // Header bar
    DomManager.addNodeChild(divWeatherInfoGridPrimary, ButtonManager.createImageButton('sunrise.svg', 'grid-header-icon'));
    DomManager.addNodeChild(divWeatherInfoGridPrimary, ButtonManager.createImageButton('sunset.svg', 'grid-header-icon'));
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-header', null, 'Cloudiness');
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-header', null, 'Visibility');
    // Registration
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-sunrise');
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-sunset');
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-cloudiness');
    DomManager.createAddNode('p', divWeatherInfoGridPrimary, 'grid-visibility');
    // Other information grid
    const divWeatherInfoGridSecondary = DomManager.createNode('div', 'main-weather-info-grid-secondary');
    // Second header bar
    DomManager.createAddNode('p', divWeatherInfoGridSecondary, 'grid-header', null, 'Humidity');
    DomManager.createAddNode('p', divWeatherInfoGridSecondary, 'grid-header', null, 'Pressure');
    DomManager.createAddNode('p', divWeatherInfoGridSecondary, 'grid-header', null, 'Wind');
    // Second registration
    DomManager.createAddNode('p', divWeatherInfoGridSecondary, 'grid-humidity');
    DomManager.createAddNode('p', divWeatherInfoGridSecondary, 'grid-pressure');
    const divWind = DomManager.createAddNode('div', divWeatherInfoGridSecondary, 'grid-wind');
    DomManager.addNodeChild(divWind, ButtonManager.createImageButton('wind-navigation.svg', 'grid-wind-direction'));
    DomManager.createAddNode('p', divWind, 'grid-wind-speed');
    // Add section to main
    DomManager.addNodeChild(main, divWeatherGrid);
    DomManager.addNodeChild(divWeatherGrid, divLocation);
    DomManager.addNodeChild(divWeatherGrid, divCurrentTime);
    DomManager.addNodeChild(divWeatherGrid, divWeather);
    DomManager.addNodeChild(divWeatherGrid, divTemperature);
    DomManager.addNodeChild(divWeatherGrid, divWeatherInfoGridPrimary);
    DomManager.addNodeChild(divWeatherGrid, divWeatherInfoGridSecondary);
    // Hide weather node
    DomManager.toggleDisplayByNode(divWeatherGrid);
  }

  #cbChangePlaceholder() {
    const editText = header.querySelector('#searchBarID');
    // Toggle operation
    this.locationCity = !this.locationCity;
    // Setup content
    const placeholder = this.locationCity ? 'City name, state, country.'
                                          : 'Zip, country.';
    editText.setAttribute('placeholder', placeholder);
  }

  #displayWind() {
    const objWind = this.weatherController.getWeatherWind();
    const imgWindDirection = document.querySelector('.grid-wind-direction > img');
    imgWindDirection.style.transform = `rotate(${objWind.direction}deg)`;
    document.querySelector('.grid-wind-speed').textContent = objWind.speed;
  }

  #displayWeatherExtra() {
    const objExtraInfo = this.weatherController.getWeatherExtraInfo();
    document.querySelector('.grid-sunrise').textContent = objExtraInfo.dayTime.sunrise;
    document.querySelector('.grid-sunset').textContent = objExtraInfo.dayTime.sunset;
    document.querySelector('.grid-cloudiness').textContent = objExtraInfo.cloudiness;
    document.querySelector('.grid-humidity').textContent = objExtraInfo.humidity;
    document.querySelector('.grid-pressure').textContent = objExtraInfo.pressure;
    document.querySelector('.grid-visibility').textContent = objExtraInfo.visibility;
    this.#displayWind();
  }

  #displayTemperature() {
    const objTemperature = this.weatherController.getWeatherTemperature();
    document.querySelector('.main-temperature').textContent = objTemperature.temp;
    document.querySelector('.main-temperature-max').textContent = objTemperature.max;
    document.querySelector('.main-temperature-feels').textContent = objTemperature.feels;
    document.querySelector('.main-temperature-min').textContent = objTemperature.min;
  }

  #displayPrecipitation() {
    document.querySelector('.grid-precipitation').textContent = this.weatherController.getPrecipitation();
  }

  #displayWeatherInfo() {
    const objWeather = this.weatherController.getWeather();
    document.querySelector('.main-weather-name').textContent = objWeather.main;
    document.querySelector('.main-weather-description').textContent = objWeather.description;
    const icon = document.querySelector('.main-weather-icon');
    const url = `http://openweathermap.org/img/wn/${objWeather.icon}@2x.png`;
    DomManager.updateNodeImg(url, icon, false);
    this.#displayPrecipitation();
  }

  #displayWeather() {
    const divWeatherGrid = document.querySelector('.main-weather-grid');
    document.querySelector('.main-location').textContent = this.weatherController.getLocation();
    document.querySelector('.main-current-time').textContent = this.weatherController.getCurrentTime();
    this.#displayWeatherInfo();
    this.#displayTemperature();
    this.#displayWeatherExtra();
    UiWeatherController.#setWeather(true);

    // Show weather node
    if (DomManager.isNodeHide(divWeatherGrid)) {
      DomManager.toggleDisplayByNode(divWeatherGrid);
    }
  }

  resetWeather() {
    const divWeatherGrid = document.querySelector('.main-weather-grid');

    // Reset when visible
    if (!DomManager.isNodeHide(divWeatherGrid)) {
      this.#stopUpdateWeatherTimer();
      document.querySelector('.main-location').textContent = '';
      document.querySelector('.main-current-time').textContent = '';
      document.querySelector('.main-weather-name').textContent = '';
      document.querySelector('.main-weather-description').textContent = '';
      const icon = document.querySelector('.main-weather-icon');
      DomManager.updateNodeImg('', icon, false);
      document.querySelector('.grid-precipitation').textContent = '';
      document.querySelector('.main-temperature').textContent = '';
      document.querySelector('.main-temperature-max').textContent = '';
      document.querySelector('.main-temperature-feels').textContent = '';
      document.querySelector('.main-temperature-min').textContent = '';
      document.querySelector('.grid-sunrise').textContent = '';
      document.querySelector('.grid-sunset').textContent = '';
      document.querySelector('.grid-cloudiness').textContent = '';
      document.querySelector('.grid-humidity').textContent = '';
      document.querySelector('.grid-pressure').textContent = '';
      document.querySelector('.grid-visibility').textContent = '';
      const imgWindDirection = document.querySelector('.grid-wind-direction > img');
      imgWindDirection.style.transform = `rotate(0deg)`;
      document.querySelector('.grid-wind-speed').textContent = '';
      UiWeatherController.#setWeather(false);
      // Show weather node
      DomManager.toggleDisplayByNode(divWeatherGrid);
    }
  }

  async #uiFetchWeather() {
    try {
      await this.weatherController.fetchWeather();
      this.#displayWeather();
    } catch(message) {
      this.resetWeather();
      UiWeatherController.showErrorMessage(message);
    }
  }

  async #cbSearchEvent(event) {
    event.preventDefault();
    try {
      this.#stopUpdateWeatherTimer();
      const editText = header.querySelector('#searchBarID');
      const mode = this.locationCity ? geocodingMode.location : geocodingMode.zip;
      await this.weatherController.geocodingLocation(editText.value, mode);
      UiWeatherController.showErrorMessage('');
      await this.#uiFetchWeather();
      this.#startUpdateWeatherTimer();
      editText.value = '';
    } catch(message) {
      this.resetWeather();
      UiWeatherController.showErrorMessage(message);
    }
  }

  #startUpdateWeatherTimer() {
    const interval = 60 * 60 * 1000;
    this.cbUpdateWeatherTimer = setInterval(async () => {
      await this.#uiFetchWeather();
    }, interval);
  }

  #stopUpdateWeatherTimer() {
    if(this.cbUpdateWeatherTimer) {
      clearInterval(this.cbUpdateWeatherTimer);
      this.cbUpdateWeatherTimer = undefined;
    }
  }

  #createSearchSection() {
    const divSearch = DomManager.createNode('div', 'main-search-weather');
    const form = DomManager.createNode('form', 'search-bar');
    const editText = InputManager.createEditText('searchBarID', 'City name, state, country.');
    const pErrorCode = DomManager.createNodeContent('p', '', 'form-error');
    const btnSubmit = InputManager.createButton('submitID', '', 'magnify.svg', 'form-button', (e) => { this.#cbSearchEvent(e); }, form);
    const btnCity = ButtonManager.createImageButton('city.svg', 'weather-button', () => { this.#cbChangePlaceholder(); });

    // Add form objects
    DomManager.addNodeChild(form, editText.input);
    DomManager.addNodeChild(form, btnSubmit.input);
    // Add to main and hide
    DomManager.addNodeChild(main, pErrorCode);
    DomManager.toggleDisplayByNode(pErrorCode);

    // Add section to header
    DomManager.addNodeChild(header, divSearch);
    DomManager.addNodeChild(divSearch, form);
    DomManager.addNodeChild(divSearch, btnCity);
  }

  static resetSearchBar() {
    const form = header.querySelector('form');
    const editText = form.querySelector('#searchBarID');
    editText.value = '';
    UiWeatherController.showErrorMessage('');
  }

  static showErrorMessage(message) {
    const pErrorCode = main.querySelector('.form-error');
    pErrorCode.textContent = message;

    if (message !== '') {
      // Show error message
      if(DomManager.isNodeHide(pErrorCode)) DomManager.toggleDisplayByNode(pErrorCode);
    } else if(!DomManager.isNodeHide(pErrorCode)) {
      // Hide error code
      DomManager.toggleDisplayByNode(pErrorCode);
    }
  }

  #createUnitButton() {
    const btn = ButtonManager.createTextButton(this.weatherController.getCurrentUnitMode(), 'unit-button', () => {
      this.weatherController.toggleUnitSystem();
      ButtonManager.editButtonText(btn, this.weatherController.getCurrentUnitMode());
      if(UiWeatherController.#getWeather()) this.#displayWeather();
    });

    DomManager.addNodeChild(header, btn);
  }

  createHeaderWeatherBar() {
    this.#createSearchSection();
    this.#createUnitButton();
  }
}
