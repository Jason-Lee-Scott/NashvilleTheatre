import React from 'react';

import { getTotalCredits, getAllTheatreCoTotalSalesByMonth } from '../../../helpers/data/theatreData';

import MonthlySales from './MonthlySales';
import TotalCredits from './TotalCredits';

import './SellerDashboard.scss';


class SellerDashboard extends React.Component {
state = {
  totalCredits: 0,
  monthlyCredits: []
}

  componentDidMount() {
    this.GetMonthlyCredits();
    this.GetTotalCredits();
  }

  GetMonthlyCredits = () => {
    getAllTheatreCoTotalSalesByMonth(2)
    .then(monthlyCredits => this.setState({ monthlyCredits: monthlyCredits }))
  }

  GetTotalCredits = () => {
    getTotalCredits(2)
      .then(totalCredits => this.setState({ totalCredits: totalCredits }))
  }

  render() {
    const { totalCredits, monthlyCredits } = this.state;
    return (
      <div className="SellerDashboard">
        <h1>Sales</h1>
        <div className="d-flex seller-dashboard">
          <TotalCredits totalCredits={totalCredits}/>
          <MonthlySales monthlyCredits={monthlyCredits} />
        </div>
      </div>
    )
  }
}

export default SellerDashboard;