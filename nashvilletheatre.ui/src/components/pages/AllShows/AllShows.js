import React from 'react';
import Show from '../../shared/Show/Show';
import showData from '../../../helpers/data/showData';
import moment from 'moment';

import './AllShows.scss';


class AllShows extends React.Component {
    state = {
        shows: []
    }

    componentDidMount() {
        showData.getAllShows()
            .then(shows => this.setState({ shows: shows }));
    };

    render() {
        const { shows } = this.state;
        const singleShow = shows.map((show) => <Show key={show.showId} show={show} showDate={moment(show.showDateTime).format("MM/DD/YYYY")}/>);
        return (
            <div className="allshows">{singleShow}</div>
        )
    }
}

export default AllShows;
