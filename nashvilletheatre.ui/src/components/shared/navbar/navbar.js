import React from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';

import Topcategories from './Topcategories';
import SearchBar from './SearchBar';

import ntc_logo from '../../../images/ntc_logo_4c.png';
import profile_icon from '../../../images/icons/profile_icon.png';
import './navbar.scss';

class Navbar extends React.Component {
  state = {
    authed: false,
  };

  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  // componentWillUnmount() {
  //   this.removeListener();
  // }

  render() {
    const { authed } = this.state;
    const buildAuthComponent = () => {
    if (authed) {
      return (
        <div>
          <nav className="navbar navbar-expand">
            <div className="navbar-nav ml-auto">
              <ul className="navbar-nav justify-content-end">
                <li className="nav-item register">
                  { !authed && (
                    <Link
                      className="nav-link"
                      to="/register">
                      Join
                    </Link>
                  )}
                </li>
                <li className="nav-item account">
                  { authed && (
                    <Link
                      className="nav-link"
                      to="/account">
                      My Tickets
                    </Link>
                  )}
                </li>
                <li className="nav-item logout">
                  { authed && (
                    <Link
                      className='nav-link logoutBtn'
                      to='/home'
                      onClick={this.logMeOut}
                      >Log Out
                    </Link>
                    )}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )
    }

      return <ul className='navbar-nav'>
          <li className="nav-item">
            { !authed && (
            <Link
              type="submit"
              className="btn btn-default col-xs-12"
              onClick={this.loginClickEvent}
              >
              Login
              <img src={profile_icon} height="20" alt="" />
            </Link>
            )}
          </li>
        </ul>;
      };

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
              {buildAuthComponent()}
            </div>
          </nav>
        </div>
      )
      }
};

export default Navbar;