export default class Zone {
  constructor(city, country, state, longitude, latitude) {
    this.city = city;
    this.country = country;
    this.state = state;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  get getCity() { return this.city; }

  get getCountry() { return this.country; }

  get getState() { return this.state; }

  getCoordinate() { return { longitude: this.longitude, latitude: this.latitude }; }
}
