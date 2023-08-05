import {connect} from 'react-redux';
import Gallery from './gallery.tsx';
import {getApodStart, getApodByDateStart} from '../../feature/apod/apod.action.ts';
import { startTransition } from 'react';

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
    getApodStart: () => dispatch(getApodStart()),
    getApodByDate: (date) => dispatch(getApodByDateStart(date)),
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gallery)