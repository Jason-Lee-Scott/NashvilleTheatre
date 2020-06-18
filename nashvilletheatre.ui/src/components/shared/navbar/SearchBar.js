import React from 'react';
import searchIco from '../../../images/icons/search_icon.png'
import './Navbar.scss';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="navbar-nav">
        <form className="SearchBar">
        <div className="form-group">
          <img src={searchIco} height="30" className="icon-inset" />
          <input
          type="text"
          className="search-box form-control"
          id="show-search"
          placeholder="Event, play, actor, venue"
          />
        </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;