import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class ApodService extends NasaService {

  getApod = () => {
    const url = this.url + this.apodPath + '?api_key=' + this.key;
    return axios.get(url);
  }

  getApodByDate = (date, thumbs) => {
    const url = this.url + this.apodPath + '?api_key=' + this.key + '&date=' + date + '&thumbs' + thumbs;
    
    return axios.get(url);
  }
};
