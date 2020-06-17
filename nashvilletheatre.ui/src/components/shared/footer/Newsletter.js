import React from 'react';
import arrow_btn from '../../../images/icons/next_icon.png'
import './footer.scss';

class Newsletter extends React.Component {
  render() {
    return (

      <form className="newsletter">
        <div className="form-group">
          <input
          type="text"
          className="news-box form-control"
          id="show-newsletter"
          placeholder="Sign up for our Weekly Newsletter"
          />
          <button className="newsletter-btn btn" onClick={() => {}}><img src={arrow_btn} height="45" /></button>
        </div>
      </form>
    );
  }
}
export default Newsletter;