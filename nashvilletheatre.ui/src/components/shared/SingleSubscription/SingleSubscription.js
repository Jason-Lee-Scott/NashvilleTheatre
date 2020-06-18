import React from 'react';

import './SingleSubscription.scss';

class SingleSubscription extends React.Component {
  render() {
    const { subscript } = this.props;
    return (
      <div className="SingleSubscription d-flex flex-column flex-center" id={subscript.subscriptionName} >
        <div className="ss-color"><div className="clip-circle-top"></div></div>

          <h5>{subscript.subscriptionName}</h5>
          <h2>${subscript.price}</h2>
          <p>See {subscript.credits} shows a month at any Nashville Theatre affiliated company</p>
          <btn className="btn btn-danger subscribe-button">SIGN UP</btn>
        <div className="ss-color"><div className="clip-circle-bottom"></div></div>
      </div>
    )
  }
}

export default SingleSubscription;