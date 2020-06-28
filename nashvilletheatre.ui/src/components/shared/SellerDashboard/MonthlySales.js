import React from 'react';

class MonthlySales extends React.Component {
  render() {
    const { monthlyCredits } = this.props;

    var data = [];
    const monthData = monthlyCredits.map((month) => [month.month, month.totalCredits])

    data = [
        ['Month', 'Total Credits'],
        [{monthData}]
    ]

    console.log(monthData);

    return (
    <div className="MonthlySales">
      <h4>Total Credits by Month</h4>
        <div className="Chart">
        </div>
    </div>
    )
  }
}
export default MonthlySales