import React from 'react';
import './navbar.scss';

class Topcategories extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav mr-auto">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" href="#">Comedy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tragedy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Musical</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Stand Up</a>
          </li>
        </ul>
      </div>
      </nav>

    );
  }
}
export default Topcategories;