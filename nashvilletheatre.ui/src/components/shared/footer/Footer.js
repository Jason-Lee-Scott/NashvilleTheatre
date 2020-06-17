import React from 'react';
import Newsletter from './Newsletter';
import Affiliates from './Affiliates'

import ntc_logo from '../../../images/ntc_logo_wht.png';
import fb_ico from '../../../images/icons/facebook_icon.png'
import insta_ico from '../../../images/icons/instagram_icon.png'
import tw_ico from '../../../images/icons/twitter_icon.png'
import yt_ico from '../../../images/icons/youtube_icon.png'

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-top text-center justify-content-center">
          <h3>SHOW CATEGORIES</h3>
          <div className="category-links">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="#">Comedy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Tragedy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Musical</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Stand-Up</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Horror</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Magic	Mystery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Satire</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Thriller </a>
              </li>
            </ul>
          </div>

        <div className="affiliate-group">
          <Affiliates />
        </div>
      </div>

      <div className="footer-bottom d-flex justify-content-between">
        <div>
          <div className="footer-image">
          <img src={ntc_logo} alt="NashvilleTheater.com Logo" />
          </div>
          <p>Copyright © 2020 Nahville Theatre.com</p>
          <p><a href="#">Term of Use</a> | <a href="#">Privacy Policy</a></p>
        </div>
        <div className="social-icon">
          <a href="#"><img src={fb_ico} alt="" /></a>
          <a href="#"><img src={insta_ico} alt="" /></a>
          <a href="#"><img src={tw_ico} alt="" /></a>
          <a href="#"><img src={yt_ico} alt="" /></a>
        </div>
        <div className="text-right">
          <Newsletter />
          <p>123 Seasame Street, Nashville, TN 37115</p>
          <p>1-800-867-5309</p>
        </div>


      </div>
      </footer>
    )
  }
}
export default Footer;