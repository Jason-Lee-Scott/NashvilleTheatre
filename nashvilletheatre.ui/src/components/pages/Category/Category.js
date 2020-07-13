import React from 'react';
import ShowCard from '../../shared/ShowCard/ShowCard';

import { getShowsByCategory } from '../../../helpers/data/categoryData';
import './category.scss';

class Category extends React.Component {
  state = {
    showsByCategory: []
  }

  componentDidMount() {
    const { categoryId } = this.props.match.params;
    getShowsByCategory(categoryId)
    .then(showsByCategory => this.setState({ showsByCategory: showsByCategory}))

  }

  componentDidUpdate() {
    const { categoryId } = this.props.match.params;
    getShowsByCategory(categoryId)
    .then(showsByCategory => this.setState({ showsByCategory: showsByCategory}))
  }

  render() {
    const { showsByCategory } = this.state;


     const ShowsByCat = showsByCategory.map((show) => <ShowCard key={show.showId} show={show}/>)
    return (

     <div>
      <h1 className="text-center cat-header">{showsByCategory.map((show) => show.categoryName).slice(0, 1)}</h1>

       <div className="show-by-cat d-flex flex-wrap">{ShowsByCat}</div>
     </div>
    )
  }
}

export default Category;