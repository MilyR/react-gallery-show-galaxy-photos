import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class ApodService extends NasaService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super()
    this.path = '/planetary/apod';
  }

  getApod = () => {
    const url = this.getUrl({});
    return axios.get(url);
  }

  getApodByDate = (date) => {
    const params = {date}
    const url = this.getUrl(params);
    return axios.get(url);
  }

  getApodByPeriod = (start_date, end_date) => {
    const params = {start_date, end_date}
    const url = this.getUrl(params);

    return axios.get(url);
  }

};
