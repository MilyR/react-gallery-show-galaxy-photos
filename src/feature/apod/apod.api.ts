import axios from "axios";
import NasaService from '../../services/nasa.service.ts';

export default class ApodService extends NasaService {

  getApod = () => {
    const path = '/planetary/apod';
    const url = this.url + path + '?api_key=' + this.key;
    return axios.get(url);
  }
};
