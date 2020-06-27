import React from 'react';
import Show from '../Show/Show';
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
        const singleShow = shows.map((show) => <Show key={show.showId} show={show}/>);
        return (
            <div className=" d-flex flex-wrap justify-content-center">{singleShow}</div>
        )
    }
}

export default AllShows;
