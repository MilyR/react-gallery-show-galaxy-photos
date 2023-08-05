import {connect} from 'react-redux';
import GalleryAsteroid from './galleryAsteroid.tsx';
import {getAsteroidStart} from '../../feature/asteroid/asteroid.action.ts';

const mapStateToProps = state => {
  return {
    asteroid: state.asteroid,
    url: state.asteroid.dataAsteroid.url,
    date: state.asteroid.dataAsteroid.date,
    title: state.asteroid.dataAsteroid.title,
    explanation: state.asteroid.dataAsteroid.explanation,
    service_version: state.asteroid.dataAsteroid.service_version,
  } 
}
const mapDispatchToProps = dispatch => {
  return {
    getAsteroidStart : () => dispatch(getAsteroidStart())
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GalleryAsteroid)