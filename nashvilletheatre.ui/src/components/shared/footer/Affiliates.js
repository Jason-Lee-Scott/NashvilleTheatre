import React from 'react';
import './footer.scss';
import corner from '../../../images/logos/cornerpieceTheater.png';
import wob from '../../../images/logos/wayOffBroadway.png';

class Affiliates extends React.Component {
  render() {
    return (
      <div className="d-flex flex-wrap align-content-center justify-content-between">
        <div className="logo-box"><img className="white-out" src={corner} /></div>
        <div className="logo-box"><img className="white-out" src={wob} /></div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
        <div className="logo-box">A Logo</div>
      </div>
    );
  }
}
export default Affiliates;