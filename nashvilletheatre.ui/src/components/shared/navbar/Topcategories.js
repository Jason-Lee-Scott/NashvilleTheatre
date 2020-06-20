import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Topcategories extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav mr-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/category/1">Comedy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/2">Tragedy</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/3">Drama</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/4">Musical</Link>
          </li>
        </ul>
      </div>
      </nav>

    );
  }
}
export default Topcategories;