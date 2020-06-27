import React from 'react';
import ProgressBar from './ProgressBar';

class MonthlySales extends React.Component {


  render() {
    const { monthlyCredits } = this.props;
    return (
    <div className="MonthlySales">
      <h4>Total Credits by Month</h4>
      {monthlyCredits.map(month => <ProgressBar key={month.Month} month={month} />)}
    </div>
    )
  }
}
export default MonthlySales