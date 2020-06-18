import React from 'react';
import './Show.scss';
import showData from '../../../helpers/data/showData';

class Show extends React.Component {

    render() {
        const { show } = this.props;
        return (
            <div class="card">
                <img src={show.showImageUrl} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{show.showName}</h5>
                    <p class="card-text">{show.synopsis}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        );
    }
}

export default Show;
