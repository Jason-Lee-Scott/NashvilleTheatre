import React from 'react';
import { Link } from 'react-router-dom';

import Topcategories from './Topcategories';
import SearchBar from './SearchBar';

import ntc_logo from '../../../images/ntc_logo_4c.png';
import profile_icon from '../../../images/icons/profile_icon.png';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand">
          <div className="navbar brand">
            <Link className="navbar-brand" to="/">
              <img src={ntc_logo} height="50" alt="NashvilleTheater.com" />
            </Link>
          </div>
          <div className="search-group">
            <SearchBar />
            <Topcategories/>
          </div>

          <div className="navbar-nav ml-auto">
            <ul className="navbar-nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link" to="/register">Join</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/account">My Tickets</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In <img src={profile_icon} height="20" alt="" /></Link>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    )
  }
}
export default Navbar;