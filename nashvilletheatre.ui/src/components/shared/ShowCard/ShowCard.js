import React from 'react';
import moment from 'moment';

import './ShowCard.scss';

class ShowCard extends React.Component {
    render() {
        const { show } = this.props;
        return (
            <div className="card col-3">
                <img src={show.showImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{show.showName}</h5>
                    <p className="card-text">{show.synopsis}</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">{show.dates.map((date) => moment(date).format('L,  '))}</li>
                </ul>
                <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div>
            </div>
        );
    }
}

export default ShowCard ;
