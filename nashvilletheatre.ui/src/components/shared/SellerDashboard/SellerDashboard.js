import React from 'react';

import { getAllTheatreCoOrders,
  getAllTheatreCoOrdersThisMonth,
  getAllTheatreCoTotalSalesByMonth } from '../../../helpers/data/TheatreData';
import MonthlySales from './MonthlySales';


class SellerDashboard extends React.Component {
state = {
  orders: [],
  ordersByMo: [],
  monthlyCredits: []
}

  componentDidMount() {
    getAllTheatreCoOrders(1)
    .then(orders => {
      getAllTheatreCoOrdersThisMonth(1)
        .then(ordersByMo => {
          getAllTheatreCoTotalSalesByMonth(1)
            .then(monthlyCredits => this.setState({ monthlyCredits: monthlyCredits, ordersByMo: ordersByMo, orders: orders })
        )
      })
    })
  }

  render() {
    const { ordersByMo } = this.state;
    return (
      <div className="SellerDashboard">
        <h1>Sales</h1>
          <MonthlySales ordersByMo={ordersByMo}/>
        <h1>Inventory</h1>
      </div>
    )
  }
}

export default SellerDashboard;