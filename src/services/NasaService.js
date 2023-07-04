import axios from "axios";

export default class NasaService {
  constructor() {
    this.url="https://api.nasa.gov"
    this.key = '9LaPy97DGmiCXNaeUnb51pspElAR0eQ60Atfk0nX';
  }

  getApod() {
    const path = '/planetary/apod';
    const url = this.url + path + '?api_key=' + this.key;
    return axios.get(url);
  }
}
