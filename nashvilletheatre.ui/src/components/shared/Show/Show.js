import React from 'react';
import './Show.scss';
// import showData from '../../../helpers/data/showData';

class Show extends React.Component {

    render() {
        const { show } = this.props;
        return (
            <div className="card d-inline-flex row col-3">
                
                <img src={show.showImageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{show.showName}</h5>
                    <p className="card-text">{show.showDateTime}</p>
                    
                </div>
                
            </div>
        );
    }
}

export default Show;
