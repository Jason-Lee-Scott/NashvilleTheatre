import React from 'react';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { Link } from 'react-router-dom';
import { getCategorySummary } from '../../../helpers/data/categoryData';
import CategoryDropdown from './CategoryDropdown';

class Category extends React.Component {
  state = {
    categorySummary: {}
  }

  // constructor(props) {
  //   super(props);

  //   this.toggle = this.toggle.bind(this);
  //   this.onMouseEnter = this.onMouseEnter.bind(this);
  //   this.onMouseLeave = this.onMouseLeave.bind(this);
  //   this.state = {
  //     dropdownOpen: false
  //   };
  // }

  // toggle() {
  //   this.setState(prevState => ({
  //     dropdownOpen: !prevState.dropdownOpen
  //   }));
  // }

  // onMouseEnter() {
  //   this.setState({dropdownOpen: true});
  // }

  // onMouseLeave() {
  //   this.setState({dropdownOpen: false});
  // }

  componentDidMount() {
    const { category } = this.props;
    getCategorySummary(category.categoryName)
      .then(categorySummary => this.setState({ categorySummary: categorySummary }))
  }

  render() {
    const { category } = this.props;
    const { categorySummary } = this.state;
    return (
      <CategoryDropdown category={category} categorySummary={categorySummary} />
    )
  }
}


export default Category;