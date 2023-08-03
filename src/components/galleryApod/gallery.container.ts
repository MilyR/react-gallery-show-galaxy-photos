import {connect} from 'react-redux';
import Gallery from './gallery.tsx';
import {getApodStart} from '../../feature/apod/apod.action.ts';

const mapStateToProps = state => {
  return {
    apod: state.apod,
    url: state.apod.dataApod.url,
    date: state.apod.dataApod.date,
    title: state.apod.dataApod.title,
    explanation: state.apod.dataApod.explanation,
    service_version: state.apod.dataApod.service_version
  } 
}
const mapDispatchToProps = dispatch => {
  return {
    getApodStart : () => dispatch(getApodStart())
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)