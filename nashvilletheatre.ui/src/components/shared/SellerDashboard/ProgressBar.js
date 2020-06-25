import React from 'react';
import {Progress} from 'reactstrap';

class ProgressBar extends React.Component {
  render() {
    const {order} = this.props;
    return (
        <div>
        <div className="text-center">{order.TotalCredits}</div>
        <Progress />
        </div>
    )
  }
}
export default ProgressBar