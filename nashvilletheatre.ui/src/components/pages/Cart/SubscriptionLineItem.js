import React from 'react'

class SubscriptionLineItem extends React.Component {

  render() {
    const { item } = this.props
    return (
      <tr>
          <td>{item.itemName}</td>
          <td></td>
          <td></td>
          <td>{item.itemPrice}</td>
      </tr>
    );
  }
}
export default SubscriptionLineItem;