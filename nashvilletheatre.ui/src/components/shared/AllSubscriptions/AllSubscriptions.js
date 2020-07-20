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
      <section>
        <div className="AllSubscriptions align-content-center text-center">
          <h2 className="title">Get All Access to Nashville Theatre!</h2>
          <h3 className="subtext light">Subscribe Today!</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {single}
          </div>
          <h4 className="theatre-login">Are you a Theatre or a venue? <Link to="">Click here</Link></h4>
      </div>
      </section>

    )
  }
}

export default AllSubscriptions;
