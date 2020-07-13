import React from 'react';
import showData from '../../../helpers/data/showData';
import Show from '../../shared/Show/Show';
import AllShows from '../../shared/AllShows/AllShows';
import tragedy from '../../../images/tragedy.jpg'
import './SearchResults.scss';

class SearchResults extends React.Component {
  state = {
    shows: [],
  }

  componentDidMount() {
    const { searchTerm } = this.props.match.params
    showData.searchShows(searchTerm)
      .then( shows => this.setState({ shows: shows }))
  }

  componentDidUpdate(e) {
    const { searchTerm } = this.props.match.params
    if (e.key === 'Enter'){
      showData.searchShows(searchTerm)
        .then( shows => this.setState({ shows: shows }))
    }

  }

  render() {
    const { shows } = this.state;
    const count = shows.length;
    const singleShow = shows.map((show) => <Show key={show.showId} show={show} showDate={show.showDateTime} showTime={show.showDateTime}/>);
    return (
      <div className="search-results container">

        { count > 0
        ? <div>
            <p className="results-number">{count} Results</p>
            <div className="d-flex flex-wrap justify-content-center">{singleShow}</div>
          </div>
        : <div>
          <div className="no-results justify-content-center text-center">
            <h1>What A Tragedy</h1>
            <h6>Your search returned no results.</h6>
            <div>
              <div className="image-circle">
                <img src={tragedy} alt="Don't Cry. There are more shows." />
              </div>
            </div>
          </div>
          <h1>But checkout theses other shows...</h1>
          <div className="d-flex flex-wrap justify-content-between">
            <AllShows />
          </div>
        </div>
        }

      </div>
    )
}
}

export default SearchResults;