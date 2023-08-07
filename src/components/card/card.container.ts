import {connect} from 'react-redux';
import Card from './card.tsx';
import {getApodStart} from '../../feature/apod/apod.action.ts'


const mapStateToProps = state => {
  return {
    apod: state.apod.dataApod,
  }
 };

const mapDispatchToProps = dispatch => {
  return {
    getApod: () => dispatch(getApodStart())
  }
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);