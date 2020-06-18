import React from 'react';

import {getAllSubscriptionsByUserType} from '../../../helpers/data/subscriptionData';
import SingleSubscription from '../SingleSubscription/SingleSubscription';

import './AllSubscriptions.scss';

class AllSubscriptions extends React.Component {
  state = {
    subscriptions: []
  }

  componentDidMount() {
    getAllSubscriptionsByUserType()
      .then(subscriptions => this.setState({ subscriptions: subscriptions }));
  };

  render() {
    const { subscriptions } = this.state;
    const single = subscriptions.map((subscription) => <SingleSubscription key={subscription.subscriptionId} subscription={subscription} />)
    return (
      <div className="AllSubscriptions">
        <h3 className="subscribe-header">GET ALL ACCESS PASS TO NASHVILLE THEATRE</h3>
        <h5 className="subscribe-subheader">Subscribe Today!</h5>
        <h6 className="theatre-login">Are you a theatre or a venue? <a href="">Click here</a></h6>
        <div className="d-flex align-content-center single-subscript-group">
          {single}
        </div>
      </div>
    )
  }
}

export default AllSubscriptions;
