import React from 'react';
import moment from 'moment';
import './Show.scss';


class Show extends React.Component {

    render() {
        const { show } = this.props;
        return (
            <div className="card d-inline-flex row col-3">
                <div><div className="clip-circle-left"></div></div>
                <img src={show.showImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{show.showName}</h5>
                    <p>{moment(show.showDate).format('L')}</p>
                    <p>{moment(show.showTime).format('LT')}</p>
                    <p className="card-text">{show.venueName}</p>
                    
                </div>
                
            </div>
        );
    }
}

export default Show;
