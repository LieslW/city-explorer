import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Button } from 'bootstrap';

class CityForm extends React.Component {
    render() {
        return(
            <>
            <Form>
                <FormGroup onSubmit={this.props.handleCitySubmit}>
                    <Form.Label>
                        Pick a City:
                    </Form.Label>
                        <Form.Control type="text" onInput={this.handleCityInput}/>
                        <input type="text" onInput={this.props.handleCityInput} name="city" />
                <Button variant="primary" type="submit">Explore!</Button>
                </FormGroup>
            </Form>
            </>
        )
    }
}

export default CityForm;
