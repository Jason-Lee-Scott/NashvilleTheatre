import React from 'react'

class Cart extends React.Component {

  render() {
    const { item } = this.props
    return (
      <div className="LineItem">
         <tr>
            <td>{item.name}</td>
            <td>{item.name}</td>
         </tr>
      </div>
    );
  }
}
export default Cart;