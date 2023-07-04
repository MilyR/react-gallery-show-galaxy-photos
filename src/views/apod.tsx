import NasaService from '../services/NasaService';

const Apod = () => {
  const service= new NasaService()
  service.getApod()
  return(
    <h1> Apod </h1>

  )
  
}

export default Apod;