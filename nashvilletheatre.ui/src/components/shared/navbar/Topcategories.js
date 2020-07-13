import React from 'react';
import {getTopCategories} from '../../../helpers/data/categoryData';
import './navbar.scss';
import Category from '../Category/Category';

class Topcategories extends React.Component {
  state = {
    categories: [],
  }

  componentDidMount() {
    getTopCategories()
      .then(categories => this.setState({ categories: categories }))
  }

  render() {
    const { categories } = this.state;
    return (
      <nav>
        <div className="nav mr-auto">
        <ul className="nav">
          {categories.map((category) => <Category key={category.categoryId+"Cat"} category={category} />)}
        </ul>
      </div>
      </nav>

    );
  }
}

export default Topcategories;