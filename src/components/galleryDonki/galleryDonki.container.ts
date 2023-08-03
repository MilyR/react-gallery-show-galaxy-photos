import {connect} from 'react-redux';
import GalleryDonki from './galleryDonki.tsx';
import {getDonkiStart} from '../../feature/donki/donki.action.ts';

const mapStateToProps = state => {
  return {
    donki: state.donki,
    url: state.donki.dataDonki.url,
    date: state.donki.dataDonki.date,
    title: state.donki.dataDonki.title,
    explanation: state.donki.dataDonki.explanation,
    service_version: state.donki.dataDonki.service_version
  } 
}
const mapDispatchToProps = dispatch => {
  return {
    getDonkiStart : () => dispatch(getDonkiStart())
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryDonki)