import React from 'react';
import Newsletter from './Newsletter';
import Affiliates from './Affiliates';

import AllCategories from '../AllCategories/AllCategories';

import ntc_logo from '../../../images/ntc_logo_wht.png';
import fb_ico from '../../../images/icons/facebook_icon.png';
import insta_ico from '../../../images/icons/instagram_icon.png';
import tw_ico from '../../../images/icons/twitter_icon.png';
import yt_ico from '../../../images/icons/youtube_icon.png';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>

        <div className="footer-top text-center justify-content-center">
          <h3>SHOW CATEGORIES</h3>
          <AllCategories />

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
          <p><a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a></p>
        </div>
        <div className="social-icon">
          <a href="https://www.facebook.com/hartkevin/"><img src={fb_ico} alt="" /></a>
          <a href="https://www.instagram.com/schwarzenegger/"><img src={insta_ico} alt="" /></a>
          <a href="https://twitter.com/Rosie"><img src={tw_ico} alt="" /></a>
          <a href="https://www.youtube.com/watch?v=oHg5SJYRHA0"><img src={yt_ico} alt="" /></a>
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
