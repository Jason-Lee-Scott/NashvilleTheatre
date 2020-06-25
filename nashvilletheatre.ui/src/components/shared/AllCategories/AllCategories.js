import React from 'react';

import CategoryCard from '../CategoryCard/CategoryCard';
import {getAllCategories} from '../../../helpers/data/categoryData';


class AllCategories extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    getAllCategories()
      .then(categories => this.setState({ categories: categories }));
  };

  render() {
    const { categories } = this.state;
    const cat = categories.map((category) => <CategoryCard key={category.categoryId} category={category} />);
    return (
      <div className="category-links AllCategories">
        <ul className="nav justify-content-center">
        {cat}
        </ul>
      </div>
    )
  }
}

export default AllCategories;