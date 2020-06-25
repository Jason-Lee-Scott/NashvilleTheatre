import React from 'react';
import './account.scss';

class Account extends React.Component {
  render() {
    return (
     <div>
       <h1 className="text-center">This is the Account Page</h1>
       <div class="card-columns">
         <div class="card">
           <img class="card-img-top" src="holder.js/100x180/" alt=""/>
           <div class="card-body">
             <h4 class="card-title">Sample Order</h4>
             <p class="card-text">Order Summary</p>
           </div>
         </div>
         <div class="card">
           <img class="card-img-top" src="holder.js/100x180/" alt=""/>
           <div class="card-body">
             <h4 class="card-title">Sample Order 2</h4>
             <p class="card-text">Order Summary 2</p>
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default Account;