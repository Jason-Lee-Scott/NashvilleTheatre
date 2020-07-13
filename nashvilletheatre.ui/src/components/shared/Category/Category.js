import React from 'react';
import { getCategorySummary } from '../../../helpers/data/categoryData';
import CategoryDropdown from './CategoryDropdown';


class Category extends React.Component {
   state = {
    categorySummary: {}
  }

  componentDidMount() {
    const { category } = this.props;
    getCategorySummary(category.categoryName)
      .then(categorySummary => this.setState({ categorySummary: categorySummary }))
  }

  render() {
    const categorySummary = this.state;
    const { category } = this.props;
    return (
      <CategoryDropdown key={category.categoryId+"Cat"} category={category} categorySummary={categorySummary} />
    );
  }
}

export default Category;