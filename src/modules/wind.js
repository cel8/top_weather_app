import MathHelper from 'Utilities/math-helper';

export const windUnit = {
  kmh: 'km/h',
  mph: 'mph'
};

export class Wind {
  constructor(objWind) {
    if (!objWind) throw new 'Invalid wind.';

    this.speed = objWind.speed;
    this.direction = objWind.deg;
    this.hasGust = (objWind.gust !== undefined) && (objWind.gust > .1);
  }

  get getDirection() { return this.direction; }

  get isGustOfWind() { return this.hasGust; }

  getSpeed(unit = windUnit.kmh) {
    return unit === windUnit.kmh ? this.#toKMh() : this.#toMPh();
  }

  #toKMh() {
    const conversionHelper = (speed) => MathHelper.getRound(speed * 3.6, 1);

    return `${conversionHelper(this.speed)} ${windUnit.kmh}`;
  }

  #toMPh() {
    const conversionHelper = (speed) => MathHelper.getRound(speed * 3.6, 1);

    return `${conversionHelper(this.speed)} ${windUnit.mph}`;
  }
}
