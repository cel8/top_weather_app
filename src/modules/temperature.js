import MathHelper from 'Utilities/math-helper';

const tempUnit = {
  c: '°C',
  f: '°F'
};

const pressUnit = {
  millibar: 'mbar',
  hectopascal: 'hPa',
  inch: 'inHg'
};


export default class Temperature {
  constructor(objTemperature) {
    if (!objTemperature) throw new 'Invalid temperature.';
    this.temp = MathHelper.getRound(objTemperature.temp);
    this.tempMin = MathHelper.getRound(objTemperature.temp_min);
    this.tempMax = MathHelper.getRound(objTemperature.temp_max);
    this.tempFeelsLike = MathHelper.getRound(objTemperature.feels_like);
    this.humidity = objTemperature.humidity;
    this.pressure = objTemperature.pressure;
  }

  getPressure(isMetricUnit = true) {
    return isMetricUnit ? this.#toBar() : this.#toInches();
  }

  get getHumidity() { return `${this.humidity}%`; }

  getTemperature(isMetricUnit = true) {
    return isMetricUnit ? this.#toCelsius() : this.#toFehrenheit();
  }

  #toCelsius() {
    return {
      temp: `${this.temp} ${tempUnit.c}`,
      min: `${this.tempMin} ${tempUnit.c}`,
      max: `${this.tempMax} ${tempUnit.c}`,
      feels: `${this.tempFeelsLike} ${tempUnit.c}`
    }
  }

  #toFehrenheit() {
    const conversionHelper = (temperature) => MathHelper.getRound((temperature * 1.8) + 32.0);

    return {
      temp: `${conversionHelper(this.temp)} ${tempUnit.f}`,
      min: `${conversionHelper(this.tempMin)} ${tempUnit.f}`,
      max: `${conversionHelper(this.tempMax)} ${tempUnit.f}`,
      feels: `${conversionHelper(this.tempFeelsLike)} ${tempUnit.f}`
    }
  }

  #toBar() {
    const conversionHelper = (hpascal) => MathHelper.getRound(hpascal * 1, 2);

    return `${conversionHelper(this.pressure)} ${pressUnit.millibar}`;
  }

  #toInches() {
    const conversionHelper = (hpascal) => MathHelper.getRound(hpascal * 0.02953, 2);

    return `${conversionHelper(this.pressure)} ${pressUnit.inch}`;
  }
}
