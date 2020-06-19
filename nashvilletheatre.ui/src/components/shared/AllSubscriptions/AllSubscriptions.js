import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="d-flex align-content-center single-subscript-group">
          {single}
        </div>
        <h4 className="theatre-login">Are you a Theatre or a venue? <Link to="">Click here</Link></h4>
      </div>
    )
  }
}

export default AllSubscriptions;
