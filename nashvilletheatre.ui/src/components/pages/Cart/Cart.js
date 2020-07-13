import React from 'react'
import LineItem from './LineItem';
import {getUsersCart} from '../../../helpers/data/cartData';

class Cart extends React.Component {
  state = {
    cart: {
      total: 0,
      lineItems: [],
    }
  }

  componentDidMount() {
    const { uid} = this.props.match.params;
    getUsersCart(uid)
    .then(Cart => this.setState({ Cart: Cart}))
  }

  render() {
    const { lineItems } = this.state
    const lineItemListing = lineItems.map((item) => <LineItem key={item.itemId} item={item}/>)
    return (
      <div className="cart-container">
         {lineItems
          ? {lineItemListing}
          : <h1>Your Cart is Empty</h1>
          }
      </div>
    );
  }
}
export default Cart;