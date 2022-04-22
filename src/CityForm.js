import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './CityForm.css';

class CityForm extends React.Component {
    render() {
        return(
            <>
            <Form className="city-form">
                <FormGroup onSubmit={this.props.handleCitySubmit}>
                    <Form.Label>
                        Pick a City:
                    </Form.Label>
                        <Form.Control type="text" onChange={this.props.handleInput}/>
                <Button 
                variant="primary" 
                type="submit"
                onClick={this.props.handleCitySubmit}>
                    Explore!
                </Button>
                </FormGroup>
            </Form>
            </>
        )
    }
}

export default CityForm;
