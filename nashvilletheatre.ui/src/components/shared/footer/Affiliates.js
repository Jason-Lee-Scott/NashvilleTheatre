import React from 'react';
import { Link } from 'react-router-dom';
import { getAllTheatres } from '../../../helpers/data/theatreData';
import './footer.scss';

class Affiliates extends React.Component {

  state = {
    theatres: [],
  }

  componentDidMount() {
    getAllTheatres()
      .then(theatres => this.setState({ theatres: theatres }));
  };

  render() {
    const { theatres } = this.state;
    return (
      <div className="d-flex flex-wrap align-content-center justify-content-between">
        {theatres.map((theatre) =>
        <div key={theatre.theatreCoId} className="logo-box">
          <Link to={`/theatre/${theatre.theatreCoId}`}>
            <img src={theatre.theatreCoImageUrl} alt={theatre.theatreCompanyName} className="white-out"/>
          </Link>
        </div>)}
      </div>
    );
  }
}
export default Affiliates;