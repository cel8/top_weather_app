import { WeatherController, geocodingMode } from 'Controller/weather-controller';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import InputManager from 'Utilities/input-manager';
import 'Svg/city.svg';

const main = document.querySelector('main');

export default class UiWeatherController {
  constructor() {
    this.weatherController = new WeatherController();
    this.locationCity = true;
  }

  createMainSection() {
    this.createSearchSection();
    this.createWeatherSection();
  }

  createWeatherSection() {
    const divWeather = DomManager.createNode('div', 'main-weather-zone');
    
    // Add section to main
    DomManager.addNodeChild(main, divWeather);
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
