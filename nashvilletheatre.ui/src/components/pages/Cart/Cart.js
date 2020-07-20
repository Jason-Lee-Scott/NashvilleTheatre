import React from 'react'
import ShowLineItem from './ShowLineItem';
import SubscriptionLineItem from './SubscriptionLineItem';
import { getUsersCartId, getShowLineItems, getSubscriptionLineItems } from '../../../helpers/data/cartData';

import './Cart.scss';

class Cart extends React.Component {
  state = {
    cartId: null,
    shows: [],
    subscriptions:[],
  }

  componentDidMount() {
    const { uid } = this.props.match.params;
    getUsersCartId(uid)
    .then((cartId) => {
      this.setState({ cartId: cartId })
      getSubscriptionLineItems(cartId)
        .then((subscriptions) => {
          this.setState({subscriptions:subscriptions})
          getShowLineItems(cartId)
            .then((shows) => {
              this.setState({shows:shows})
        })
      })
    })
  };

  render() {
    const { cartId, shows, subscriptions } = this.state;
    const showItemListing = shows.map((item) => <ShowLineItem key={item.itemId} item={item}/>)
    const subscriptionItemListing = subscriptions.map((item) => <SubscriptionLineItem key={item.itemId} item={item}/>)
    return (
      <div className="cart-container">
        <h1 className="text-center">Cart {cartId}</h1>
        <div className="line-items">
        {subscriptionItemListing.length > 0
        ?<div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Subscription</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {subscriptionItemListing}
          </tbody>
        </table>
        </div>
        :null
        }
        {shows.length > 0
        ?<div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Show Name</th>
              <th scope="col">Show Date</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {showItemListing}
          </tbody>
        </table>
        </div>

        :<div>
          <h2 className="text-center">Now Shows In Your Cart.</h2>
          <h4 className="text-center subtext">Let's find some</h4>
        </div>
        }
        </div>
        <button type="button" className="button-1" onClick={() => {}}>CHECKOUT</button>
      </div>
    );
  }
}
export default Cart;