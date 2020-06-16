import React from 'react';
import ntc_logo from '../../../images/ntc_logo_4c.png';
import profile_icon from '../../../images/icons/profile_icon.png';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg">
          <div className="navbar brand">
            <a className="navbar-brand" href="/">
              <img src={ntc_logo} height="50" alt="NashvilleTheater.com" />
            </a>
          </div>
          <div className="navbar-nav">
          <p>Insert Search Component Here</p>
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
    );
  }
}
export default Navbar;