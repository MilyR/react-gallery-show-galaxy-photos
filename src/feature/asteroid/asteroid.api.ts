import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class AsteroidService extends NasaService {

  getAsteroids = () => {
    const url = this.url + this.asteroidPath + '/neo/browse' + '?api_key=' + this.key;
    return axios.get(url);
  }
};
