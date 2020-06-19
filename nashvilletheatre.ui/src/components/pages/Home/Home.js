import React from 'react';
import AllSubscriptions from '../../shared/AllSubscriptions/AllSubscriptions';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
     <div>
       <h1 className="text-center">This is the Hompage</h1>

       <div className="">
            <AllSubscriptions />
          </div>
     </div>
    )
  }
}

export default Home;
