import React from 'react';
import { Link } from 'react-router-dom';


class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <li className="nav-item Category">
        <Link className="nav-link" to={`/category/${category.categoryId}`}>{category.categoryName}</Link>
      </li>
    )
  }
}

export default Category;