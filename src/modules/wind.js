import MathHelper from 'Utilities/math-helper';

const windUnit = {
  kmh: 'km/h',
  mph: 'mph'
};

export default class Wind {
  constructor(objWind) {
    if (!objWind) throw new 'Invalid wind.';

    this.speed = objWind.speed;
    this.direction = objWind.deg;
    this.hasGust = (objWind.gust !== undefined) && (objWind.gust > .1);
  }

  get getDirection() { return this.direction; }

  get isGustOfWind() { return this.hasGust; }

  getSpeed(isMetricUnit = true) {
    return isMetricUnit ? this.#toKMh() : this.#toMPh();
  }

  #toKMh() {
    const conversionHelper = (speed) => MathHelper.getRound(speed * 3.6, 1);

    return `${conversionHelper(this.speed)} ${windUnit.kmh}`;
  }

  #toMPh() {
    const conversionHelper = (speed) => MathHelper.getRound(speed * 2.23694, 1);

    return `${conversionHelper(this.speed)} ${windUnit.mph}`;
  }
}
