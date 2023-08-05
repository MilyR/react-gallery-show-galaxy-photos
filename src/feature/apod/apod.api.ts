import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class ApodService extends NasaService {

  getApod = () => {
    const url = this.url + this.apodPath + '?api_key=' + this.key;
    return axios.get(url);
  }

  getApodByDate = (date) => {
    const url = this.url + this.apodPath + '?api_key=' + this.key + '&date=' + date;
    
    return axios.get(url);
  }

  getApodByPeriod = (startDate, endDate) => {
    const url = this.url + this.apodPath + '?api_key=' + this.key + '&start_date=' + startDate + '&end_date=' + endDate;

    return axios.get(url);
  }

};
