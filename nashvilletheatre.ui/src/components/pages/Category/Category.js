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
    
    const ShowsByCat = showsByCategory.map((show) => <ShowCard key={show.showId-show.categoryId} show={show} showDate={show.showDateTime} showTime={show.showDateTime} />)
    return (
     <div>
       <h1 className="text-center">This is the Category Page</h1>
       <h2>do this work?</h2>
       <div className="show-by-cat d-flex">{ShowsByCat}</div>
     </div>
    )
  }
}

export default Category;