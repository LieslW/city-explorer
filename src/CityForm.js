import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class CityForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: 'City of Atlantis',
        };
    };

    citySearch = () => {
        this.props.handleCitySubmit(this.state.search);
    }

    render() {
        return(
            <>
            <Form>
                <FormGroup onSubmit={this.props.handleCitySubmit}>
                    <Form.Label>
                        Pick a City:
                    </Form.Label>
                        <Form.Control type="text" onChange={(e) => this.setState({search: e.target.value})}/>
                <Button 
                variant="primary" 
                type="submit"
                onClick={this.citySearch}>
                    Explore!
                </Button>
                </FormGroup>
            </Form>
            </>
        )
    }
}

export default CityForm;
