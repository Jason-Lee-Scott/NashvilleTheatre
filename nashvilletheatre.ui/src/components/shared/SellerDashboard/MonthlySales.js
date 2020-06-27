import React from 'react';
import ProgressBar from './ProgressBar';

class MonthlySales extends React.Component {


  render() {
    const { monthlyCredits } = this.props;
    return monthlyCredits.map(month => <ProgressBar key={month.Month} month={month} />);
  }
}
export default MonthlySales