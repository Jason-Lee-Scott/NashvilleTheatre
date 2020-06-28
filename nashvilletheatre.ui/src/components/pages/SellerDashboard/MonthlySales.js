import React from 'react';
import { Table } from 'reactstrap';

class MonthlySales extends React.Component {
  render() {
    const { monthlyCredits } = this.props;

    const row = monthlyCredits.map(month =>
    <tr key={month.month}>
      <th scope="row"></th>
      <td>{month.month}</td>
      <td>{month.totalCredits}</td>
    </tr>)

    return (
      <div className="MonthlySales">
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Month</th>
              <th>Total Credits Sold</th>
            </tr>
          </thead>
          <tbody>
            {row}
          </tbody>
        </Table>
      </div>
    )
  }
}
export default MonthlySales