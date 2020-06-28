import React from 'react';

class TotalCredits extends React.Component {
  render() {
    const { totalCredits } = this.props;

    return (
      <div className="TotalCredits">
        <div className="credit">
          {totalCredits}
          <h6 className="credit-text">
            Total Credits Sold
          </h6>
        </div>
      </div>
    )
  }
}

export default TotalCredits;