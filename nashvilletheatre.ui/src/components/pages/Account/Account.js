import React from 'react';
import './account.scss';
import SellerDashboard from '../../shared/SellerDashboard/SellerDashboard';

class Account extends React.Component {
  render() {
    return (
     <div>
       <h1 className="text-center">This is the Account Page</h1>
       <SellerDashboard />
     </div>
    )
  }
}

export default Account;