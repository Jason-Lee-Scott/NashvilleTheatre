import React from 'react';
import moment from 'moment';
import './Show.scss';


class Show extends React.Component {

    render() {
        const { show } = this.props;
        return (
            <div className="card col-3 showcard">
                <div className="align-up row">
                <div className="show-margin col-1"></div><div className="clip-circle-left col-2"></div>
                <img src={show.showImageUrl} className="card-img-top show-image col-12" alt="..."/>
                <div className="show-margin col-1"></div><div className="clip-circle-right col-2"></div>
                </div>
                <div className="card-body showcard">
                    <h5 className="card-title showname">{show.showName}</h5>
                    <div className="d-flex justify-content-between">
                    <p className="showdate">{moment(show.showDate).format('L')}</p>
                    <p className="showtime">{moment(show.showTime).format('LT')}</p>

                    </div>
                    <p className="card-text venue">{show.venueName}</p>
                    
                </div>
                
            </div>
        );
    }
}

export default Show;
