import React from 'react';
import {Progress} from 'reactstrap';

class ProgressBar extends React.Component {
  render() {
    const {monthlyCredits} = this.props;
    return (
        <div>
        <div className="text-center">{monthlyCredits.TotalCredits}</div>
        <Progress />
        </div>
    )
  }
}
export default ProgressBar