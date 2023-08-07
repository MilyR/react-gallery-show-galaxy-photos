export default class NasaService {
  path;
  url;
  key;
  constructor() {
    this.url = 'https://api.nasa.gov';
    this.key = '9LaPy97DGmiCXNaeUnb51pspElAR0eQ60Atfk0nX';
  }

  getUrl = (params) => {
    const privatePath = this.url + this.path + '?api_key=' + this.key;
    const keys = Object.keys(params);
    let prepareParams = '';
    for(let i=0; i< keys.length; i++){
      prepareParams = prepareParams + '&' + keys[i] + '=' + params[keys[i]];
    }
    return privatePath + prepareParams;
  }
}
