import React from 'react';
import ShowCard from '../ShowCard/ShowCard';
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
        const singleShow = shows.map((show) => <ShowCard key={show.showId} show={show} showDate={show.showDateTime} showTime={show.showDateTime}/>);
        return (
            <div className=" d-flex flex-wrap justify-content-center">{singleShow}</div>
        )
    }
}

export default AllShows;
