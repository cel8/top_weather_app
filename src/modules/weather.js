import { Temperature } from 'Modules/temperature';
import { Wind } from 'Modules/wind';
import Zone from 'Modules/zone';

export default class Weather {
  constructor() {
    this.zone = undefined;
    this.temperature = undefined;
    this.wind = undefined;
  }

  get getTemp() { return this.temperature; }

  get getWind() { return this.wind; }

  get getZone() { return this.zone; }

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
}
