import React from 'react';
import moment from 'moment';
import './show.scss';
import { Link } from 'react-router-dom';


class Show extends React.Component {

	render() {
		const { show } = this.props;
		return (

			<div className="show-card">
				<div className="ticket-image">
					<svg height="0" width="0">
						<defs>
							<clipPath id="ticket-clip">
								<path d="M320,53.2V0H0V53.2C12.8,53.2,23.2,63,23.2,75S12.8,96.8,0,96.8V150H320V96.8c-12.8,0-23.2-9.8-23.2-21.8S307.2,53.2,320,53.2Z"/>
							</clipPath>
						</defs>
					</svg>
					<Link to={`/show/${show.showId}`}>
					<img src={show.showImageUrl} alt={show.showName}/>
					</Link>
				</div>
				<div className="show-info">
					<h5 className="show-name">{show.showName}</h5>
						<div className="red-dash"></div>
						<div className="d-flex justify-content-between">
							<p className="show-date">{moment(show.showDateTime).format('L')}</p>
							<p className="show-time">{moment(show.showDateTime).format('LT')}</p>
						</div>
					<p className="venue">{show.venueName}</p>
					<Link className="view-info" to={`/show/${show.showId}`}><h4>View Info</h4></Link>
				</div>
			</div>

		);
	}
}

export default Show;
