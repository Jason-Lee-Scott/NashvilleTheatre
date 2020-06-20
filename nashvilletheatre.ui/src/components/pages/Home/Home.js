import React from 'react';
import AllSubscriptions from '../../shared/AllSubscriptions/AllSubscriptions';
import AllShows from '../../shared/AllShows/AllShows';

import './home.scss';


class Home extends React.Component {
  render() {
    return (
     <div>
       <h1 className="text-center">This is the Homepage</h1>
       <AllShows />
       <AllSubscriptions />
     </div>
    )
  }
}

export default Home;
