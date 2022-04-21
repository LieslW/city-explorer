import React from 'react';
import { Card } from 'react-bootstrap';

class ResultsCard extends React.Component {
    
    render() {
        // console.log('result card', this.state);
        // console.log('result card props', this.props);
        let mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.lat},${this.props.lon}&zoom=15`;
        return (
            <>
                <Card>
                    <Card.Img variant="top" src={mapUrl}/>
                    <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        Latitude: {this.props.lat}
                        Longitude: {this.props.lon}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default ResultsCard;
