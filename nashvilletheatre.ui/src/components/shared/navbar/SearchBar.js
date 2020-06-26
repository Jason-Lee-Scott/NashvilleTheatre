import React from 'react';
import { withRouter } from 'react-router-dom';
import searchIco from '../../../images/icons/search_icon.png'
import './navbar.scss';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  }

  updateSearchTerm = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  searchBarChange = (e) => {
    if (e.keyCode === 13) {
      this.props.history.push(`/search/${this.state.searchTerm}/`);
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <form className="SearchBar">
        <div className="form-group">
          <img src={searchIco} height="30" className="icon-inset" alt="Search:" />
          <input
          type="text"
          className="search-box form-control"
          id="show-search"
          placeholder="Event, play, or other show name"
          value={searchTerm}
          onChange={this.updateSearchTerm}
          onKeyDown={this.searchBarChange}
          />
        </div>
      </form>
    );
  }
}
export default withRouter(SearchBar);