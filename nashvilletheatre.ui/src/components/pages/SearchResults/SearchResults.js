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
    const singleShow = shows.map((show) => <Show key={show.showId} show={show} showDate={show.showDateTime} showTime={show.showDateTime}/>);
    return (
        <div className=" d-flex flex-wrap justify-content-center">{singleShow}</div>
    )
}
}

export default SearchResults;