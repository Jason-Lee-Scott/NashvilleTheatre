import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CategoryDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }

  render() {
    const { category } = this.props;
    const catSum = this.props?.categorySummary;
    return (
      <li className="nav-item Category">
        <Dropdown className="Category-dropdown" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle color="none">
          <Link className="nav-link" to={`/category/${category.categoryId}`}>{category.categoryName}</Link>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>{category.categoryName} ({catSum.categoryTotal} shows)</DropdownItem>
          <DropdownItem divider />
          {
            (catSum.showList?.map(show =>
              <DropdownItem key={show.showId+"-category"}>
                <Link className="dropdown-item-text-category" to={`/show/${show.showId}`}>{show.showName}</Link>
              </DropdownItem>))
          }
        </DropdownMenu>
        </Dropdown>
      </li>
    )
  }
}

export default CategoryDropdown;