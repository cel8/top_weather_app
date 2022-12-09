
import 'Svg/home-outline.svg';
import 'Svg/github.svg';
import 'Svg/dark-theme.svg';
import 'Svg/light-theme.svg';
import DomManager from 'Utilities/dom-manager';
import ButtonManager from 'Utilities/button-manager';
import UiWeatherController from 'View/ui-weather-controller';

const root = document.documentElement;

export const settings = { theme: 'dark' };

export default class UiController {
  constructor() {
    this.uiWeatherController = new UiWeatherController();
  }

  #doLoadHeader() {
    const header  = document.querySelector('header');
    
    DomManager.addNodeChild(header, ButtonManager.createImageButton('home-outline.svg', 'header-button', () => {
      UiWeatherController.resetSearchBar();
      this.uiWeatherController.resetWeather();
    }));

    const btnToggleTheme = ButtonManager.createImageButton(`${settings.theme}-theme.svg`, 'header-button', () => {
      settings.theme = (settings.theme !== 'dark' ? 'dark' : 'light');
      ButtonManager.editButtonImage(btnToggleTheme, `${settings.theme}-theme.svg`);
      root.className = settings.theme;
    });
    
    this.uiWeatherController.createHeaderWeatherBar();

    DomManager.addNodeChild(header, btnToggleTheme);
  }

  static #doCreateHome() {
    UiWeatherController.createMainSection();
  }

  static #doLoadMainContent() {
    UiController.#doCreateHome();
  }

  static #doLoadFooter() {
    const curYear = new Date().getFullYear();
    const footer = document.querySelector('footer')
    DomManager.createAddNode('p', footer, null, null, `Copyright © ${curYear} Alessandro Celotti`);
    DomManager.addNodeChild(footer, ButtonManager.createImageLinkButton('https://github.com/cel8', 'github.svg'));
  }

  doLoadUI() {
    // Set main root theme
    root.className = settings.theme;
    this.#doLoadHeader();
    UiController.#doLoadMainContent();
    UiController.#doLoadFooter();
  }
}
