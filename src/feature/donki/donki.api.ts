import axios from 'axios';
import NasaService from '../../services/nasa.service.ts';

export default class DonkiService extends NasaService {

  getDonki = () => {
    const url = this.url + this.donkiPath + '/neo/browse' + '?api_key=' + this.key;
    return axios.get(url);
  }
};
