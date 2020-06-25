import React from 'react';
import ProgressBar from './ProgressBar';

class MonthlySales extends React.Component {


  render() {
    const { ordersByMo } = this.props;
    return ordersByMo.map(order => <ProgressBar key={order.Month} order={order} />);
  }
}
export default MonthlySales