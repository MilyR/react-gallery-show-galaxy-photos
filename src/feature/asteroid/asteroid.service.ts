import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class AsteroidService extends NasaService {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super()
    this.path = 'neo/rest/v1/';
  }

  getAsteroid = () => {
    const url = this.getUrl({});
    return axios.get(url);
  }

  getAsteroidByDate = (date) => {
    const params = {date}
    const url = this.getUrl(params);
    return axios.get(url);
  }

  getAsteroidByPeriod = (start_date, end_date) => {
    const params = {start_date, end_date}
    const url = this.getUrl(params);

    return axios.get(url);
  }

};