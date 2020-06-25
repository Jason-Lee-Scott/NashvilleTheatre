import React from 'react';
import showData from '../../../helpers/data/showData';
import Show from '../../shared/Show/Show';
import './searchResults.scss';

class SearchResults extends React.Component {
  state = {
    shows: []
  }

  componentDidMount() {
    const { searchTerm } = this.props.match.params
    showData.searchShows(searchTerm)
    .then( shows => this.setState({ shows: shows }))
  }

  render() {
    const { shows } = this.state;
    const count = shows.length;
    const { searchTerm } = this.props.match.params;
    const singleShow = shows.map((show) => <Show key={show.showId} show={show} showDate={show.showDateTime} showTime={show.showDateTime}/>);
    return (
      <div className="container">
        <h2>Searched For: "<span className="search-term">{searchTerm}</span>"</h2>
        <h3>{count} Results</h3>
        <div className=" d-flex flex-wrap justify-content-center">{singleShow}</div>
      </div>
    )
}
}

export default SearchResults;