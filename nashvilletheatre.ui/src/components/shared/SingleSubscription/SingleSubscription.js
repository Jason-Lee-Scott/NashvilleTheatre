import React from 'react';

import './SingleSubscription.scss';

class SingleSubscription extends React.Component {
  render() {
    const { subscription } = this.props;
    return (
      <div className="SingleSubscription d-flex flex-column flex-center" id={subscription.subscriptionName} >
        <div className="ss-color"><div className="clip-circle-top"></div></div>

          <h4>{subscription.subscriptionName}</h4>
          <h1>${subscription.price}</h1>
          <h5>per month</h5>
          <p>See {subscription.credits} shows a month at any Nashville Theatre affiliated company</p>
          <button className="btn btn-danger subscribe-button">SIGN UP</button>
        <div className="ss-color"><div className="clip-circle-bottom"></div></div>
      </div>
    )
  }
}

export default SingleSubscription;