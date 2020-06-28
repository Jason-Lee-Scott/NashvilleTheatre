import React from 'react';

import { getAllTheatreCoOrders,
  getTotalCredits,
  getAllTheatreCoTotalSalesByMonth } from '../../../helpers/data/TheatreData';

import MonthlySales from './MonthlySales';
import TotalCredits from './TotalCredits';

import './SellerDashboard.scss';


class SellerDashboard extends React.Component {
state = {
  orders: [],
  totalCredits: 0,
  monthlyCredits: []
}

  componentDidMount() {
    getAllTheatreCoOrders(2)
    .then(orders => {
      getTotalCredits(2)
        .then(totalCredits => {
          getAllTheatreCoTotalSalesByMonth(2)
            .then(monthlyCredits => this.setState({ monthlyCredits: monthlyCredits, totalCredits: totalCredits, orders: orders })
        )
      })
    })
  }

  render() {
    const { totalCredits, orders, monthlyCredits } = this.state;
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