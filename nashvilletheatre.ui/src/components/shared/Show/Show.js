import React from 'react';
import moment from 'react-moment';
import './Show.scss';
// import showData from '../../../helpers/data/showData';

class Show extends React.Component {

    render() {
        const { show } = this.props;
        return (
            <div className="card d-inline-flex row col-3">
                <div><div className="clip-circle-left"></div></div>
                <img src={show.showImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{show.showName}</h5>
                    <p>{show.showDate}</p>
                    <p className="card-text">{show.venueName}</p>
                    
                </div>
                
            </div>
        );
    }
}

export default Show;
