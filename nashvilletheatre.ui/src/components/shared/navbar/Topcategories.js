import React from 'react';
import './navbar.scss';

class Topcategories extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav mr-auto">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Comedy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tragedy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Musical</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Stand Up</a>
          </li>
        </ul>
      </div>
      </nav>

    );
  }
}
export default Topcategories;