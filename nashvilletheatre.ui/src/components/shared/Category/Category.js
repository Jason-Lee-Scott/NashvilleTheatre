import React from 'react';
import './Category.scss';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <li className="nav-item Category">
      <a className="nav-link" id={category.categoryId} href="#">{category.categoryName}</a>
    </li>
    )
  }
}

export default Category;