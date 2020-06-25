import React from 'react';
import { withRouter } from 'react-router-dom';
import searchIco from '../../../images/icons/search_icon.png'
import './navbar.scss';

class SearchBar extends React.Component {
  state = {
    searchTerm: '',
  }

  searchBarChange = (e) => {
    e.preventDefault();
    this.setState({ searchTerm: e.target.value }, () => {
      this.props.history.push(`/search/${this.state.searchTerm}`);
    })
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="navbar-nav">
        <form className="SearchBar">
        <div className="form-group">
          <img src={searchIco} height="30" className="icon-inset" alt="Search:" />
          <input
          type="text"
          className="search-box form-control"
          id="show-search"
          placeholder="Event, play, or other show name"
          value={searchTerm}
          onChange={this.searchBarChange}
          />
        </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SearchBar);