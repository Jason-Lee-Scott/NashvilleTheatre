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
    this.setState({ searchTerm: e.target.value });
  }

  searchEvent = (e) => {
    e.preventDefault();
    const { searchTerm } = this.state;
    this.props.history.push(`search/${searchTerm}`);
  }

  handleChange= (e) => {
    if (e.key === 'Enter') {
      this.searchEvent(e);
    } else {
      this.searchBarChange(e);
    }
  }

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="navbar-nav">
        <form className="SearchBar">
        <div className="form-group">
          <img src={searchIco} height="30" className="icon-inset" />
          <input
          type="text"
          className="search-box form-control"
          id="show-search"
          placeholder="Event, play, or other show name"
          value={searchTerm}
          onChange={this.handleChange}
          />
        </div>
        </form>
      </div>
    );
  }
}
export default withRouter(SearchBar);