import React from 'react';
import {Progress} from 'reactstrap';

class ProgressBar extends React.Component {
  render() {
    const {month} = this.props;
    console.log(month);
    return (
        <div className="ProgressBar">
        <div className="text-center">{month.month}</div>
        <Progress multi>
        <Progress bar value="10"></Progress>
          <Progress bar value={month.totalCredits}/>
        </Progress>
        </div>
    )
  }
}
export default ProgressBar