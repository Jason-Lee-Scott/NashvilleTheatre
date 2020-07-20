import React from 'react';

import './SingleSubscription.scss';

class SingleSubscription extends React.Component {
  render() {
    const { subscription } = this.props;
    return (
      <div>
        <svg height="0" width="0">
          <defs>
            <clipPath id="vertTicket">
              <path d="M199.4,0c0,24.8-22.1,47.9-49.4,47.9S100.6,24.8,100.6,0H0V500H100.6c0-24.8,22.1-47.9,49.4-47.9s49.4,23.1,49.4,47.9H300V0Z"/>
            </clipPath>
          </defs>
        </svg>
        <div className="SingleSubscription clip-tix" id={subscription.subscriptionName} >
          <div className="text-center ticketNugget">
            <h3>{subscription.subscriptionName}</h3>
            <h1 className="title">${subscription.price}</h1>
            <h5>/month</h5>
            <p>See {subscription.credits} shows a month at any Nashville Theatre affiliated company</p>
            <button className="button-1">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleSubscription;