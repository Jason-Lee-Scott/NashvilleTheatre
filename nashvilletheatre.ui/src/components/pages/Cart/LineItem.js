import React from 'react'

class Cart extends React.Component {

  render() {
    const { item } = this.props
    return (
      <tr>
          <td>{item.itemName}</td>
          <td>{item.showDateTime}</td>
          <td>{item.quantity}</td>
          <td>{item.itemPrice}</td>
      </tr>
    );
  }
}
export default Cart;