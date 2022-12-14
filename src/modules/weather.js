import MathHelper from 'Utilities/math-helper';
import Temperature from 'Modules/temperature';
import Wind from 'Modules/wind';
import Zone from 'Modules/zone';

const spaceUnit = {
  inches:     'in',
  kilometer:  'km',
  meter:      'm',
  miles:      'mi',
  millimeter: 'mm'
};

export default class Weather {
  constructor() {
    this.zone = undefined;
    this.temperature = undefined;
    this.wind = undefined;
    this.cloudiness = 0;
    this.visibility = 0;
    this.precipitation = 0;
    this.currentWeather = undefined;
    this.current = '';
    this.dayTime = undefined;
  }

  get getTemp() { return this.temperature; }

  get getWind() { return this.wind; }

  get getZone() { return this.zone; }

  get getCurrentWeather() { return this.currentWeather; }

  get getCloudiness() { return `${this.cloudiness}%`; }

  get getCurrentTime() { return this.current; }

  get getDayTime() { return this.dayTime; }

  getPrecipitation(isMetricUnit = true) {
    if(this.precipitation !== 0)
      return isMetricUnit ? this.#toMilliMeter() : this.#toInches();
    return 'none';
  }

  getVisibility(isMetricUnit = true) {
    return isMetricUnit ? this.#toMeter() : this.#toMiles();
  }

  /**
   * @param {Zone} zone
   */
   set setZone(zone) {
    if (!(zone instanceof(Zone))) throw new 'Invalid zone type.'
    this.zone = zone;
  }

  /**
   * @param {Temperature} temperature
   */
  set setTemperature(temperature) {
    if (!(temperature instanceof(Temperature))) throw new 'Invalid temperature type.'
    this.temperature = temperature;
  }

  /**
   * @param {Wind} wind
   */
  set setWind(wind) {
    if (!(wind instanceof(Wind))) throw new 'Invalid wind type.'
    this.wind = wind;
  }

  /**
   * @param {number} cloudiness
   */
  set setCloudiness(cloudiness) {
    this.cloudiness = cloudiness || 0;
  }

  /**
   * @param {number} visibility
   */
  set setVisibility(visibility) {
    this.visibility = visibility || 0;
  }

  /**
   * @param {string} current
   */
   set setCurrentTime(current) {
    this.current = current;
  }

  /**
   * @param {number} precipitation
   */
   set setPrecipitation(precipitation) {
    this.precipitation = precipitation || 0;
  }

  setDayTime(strSunset, strSunrise) {
    this.dayTime = {
      sunset: strSunset,
      sunrise: strSunrise
    };
  }

  setCurrentWeather(wid, wMain, wDescription, wIcon) {
    this.currentWeather = {
      id: wid,
      main: wMain,
      description: wDescription,
      icon: wIcon
    };
  }

  #toMilliMeter() {
    const conversionHelper = (mm) => MathHelper.getRound(mm * 1, 2);

    return `${conversionHelper(this.precipitation)} ${spaceUnit.millimeter}`;
  }

  #toInches() {
    const conversionHelper = (mm) => MathHelper.getRound(mm * 0.0393701, 2);

    return `${conversionHelper(this.precipitation)} ${spaceUnit.inches}`;
  }

  #toMeter() {
    const conversionHelper = (meter) =>  MathHelper.getRound(meter / 1000, 1);
    if(this.visibility >= 1000) {
      const value = conversionHelper(this.visibility);
      return value >= 10 ? `>= ${value} ${spaceUnit.kilometer}` : `${value} ${spaceUnit.kilometer}`;
    }
    return `${this.visibility} ${spaceUnit.meter}`;
  }

  #toMiles() {
    const conversionHelper = (meter) => MathHelper.getRound(meter * 0.00062137, 1);
    const value = conversionHelper(this.visibility);

    return value >= 6.2 ? `>= ${value} ${spaceUnit.miles}` : `${value} ${spaceUnit.miles}`;
  }
}
