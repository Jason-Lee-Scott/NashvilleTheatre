import React from 'react';
import Show from '../../shared/Show/Show';
import showData from '../../../helpers/data/showData';


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
        const singleShow = shows.map((show) => <Show key={show.showId} show={show} showDate={show.showDateTime} showTime={show.showDateTime}/>);
        return (
            <div className="allshows container justify-content-center d-flex flex-wrap">{singleShow}</div>
        )
    }
}

export default AllShows;
