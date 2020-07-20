import React from 'react'
import LineItem from './LineItem';
import { getUsersCartId, getLineItems, getUsersCart } from '../../../helpers/data/cartData';

class Cart extends React.Component {
  state = {
    cart: {
      cartCreationDate: "2020-07-18T00:00:00-05:00",
      cartId: 1,
      showLineItem: [
        {
        itemName: "Who's Afraid of Virginia Woolf",
        itemPrice: 15,
        lineItemId: 1,
        quantity: 1,
        showDateTime: "2020-08-08T19:30:00"
        }
      ],
      subscriptionLineItem: [],
      total: 15,
      uid: 1
    }
  }



  componentDidMount() {
    const { uid } = this.props.match.params;
    // getUsersCartId(uid)
    // .then((cartId) => {
    //   this.setState({ cartId: cartId })
    //   getLineItems(cartId)
    //     .then((lineItems) => {
    //       this.setState({lineItems:lineItems})
    //     });
    //   });
      getUsersCart(uid)
      .then(cart => this.setState({ cart : cart })
      )
    }

  render() {
    const { cart } = this.state;
    const lineItemListing = cart.showLineItem.map((item) => <LineItem key={item.itemId} item={item}/>)
    return (
      <div className="cart-container">
        <h1 className="text-center">Cart {cart.cartId}</h1>
        <div className="line-items">
        {lineItemListing
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
            {lineItemListing}
          </tbody>
        </table>
        <button type="button" className="button-1" onClick={() => {}}>CHECKOUT</button>
        </div>
        :<h1>Your Cart is Empty</h1>
        }
        </div>
      </div>
    );
  }
}
export default Cart;