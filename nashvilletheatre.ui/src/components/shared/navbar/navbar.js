import React from 'react';
import ntc_logo from '../../../images/ntc_logo_4c.png';
import profile_icon from '../../../images/icons/profile_icon.png';

import Topcategories from './Topcategories';
import SearchBar from './SearchBar';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand">
          <div className="navbar brand">
            <a className="navbar-brand" href="/">
              <img src={ntc_logo} height="50" alt="NashvilleTheater.com" />
            </a>
          </div>
          <div className="search-group">
            <SearchBar />
            <Topcategories/>
          </div>

          <div className="navbar-nav ml-auto">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" href="#">Join</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">My Tickets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In <img src={profile_icon} height="20" alt="" /></a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
export default Navbar;