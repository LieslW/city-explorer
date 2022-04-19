import React from 'react';
import './Main.css';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'bootstrap';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationData: [],
            city: '',
            cityData: {},
            error: false,
            errorMessage: 'None',
        }
    }

    // handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         let cityInfo = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);
    //         this.setState({
    //             newCityData: cityInfo.data.results
    //         });
    //     } catch (error) {
    //         console.log('error: ', error.response);
    //         this.setState({
    //             error: true,
    //             errorMessage: `An Error Occured: ${error.response.status}`
    //         })
    //     }
    // }

    handleCityInput = (e) => {
        this.setState({
            city: e.target.value
        })
    }



    // handleLocation = async (e) => {
    //     e.preventDefault();
    //     let locationCharacter = await axios.get()
    //     this.setState({
    //         locationData: locationCharacter.data.results
    //     })
    // }


    // getCityData = async (e) => {
    //     e.preventDefault();
    //     let cityData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`)
    // }

    handleCitySubmit = async (e) => {
        e.preventDefault();
        try {
            let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
            let cityData = await axios.get(url);
            console.log(cityData.data[0]);
            this.setState({
                cityData: cityData.data[0]
            });
        } catch (error) {
            console.log('error: ', error.response);
            this.setState({
                error: true,
                errorMessage: `An Error Occurred: ${error.response.status}`
            })
        }
    }


    render() {
        // console.log(this.state);
        // let cityList = this.state.locationData.map((char, idx) => {
        //     return <li key={idx}>{char.display_name}</li>
        // })
        // console.log('test:', cityList);
        // console.log('display test: ', this.state.cityList);
        return (
            <>
                {/* <h1>Data from an API</h1>
                <form onSubmit={this.handleSubmit}>
                    <button>Display City Data</button>
                </form> */}
                {/* <Form>
                <Form.Group onSubmit={this.handleCitySubmit}>
                    <Form.Label>
                        Pick a City:
                    </Form.Label>
                        <Form.Control type="text" onInput={this.handleCityInput}/>
                        {/* <input type="text" onInput={this.handleCityInput} name="city" /> */}
                    {/* <Button variant="primary" type="submit">Explore!</Button> */}
                {/* </Form.Group> */}
                {/* </Form> */}
                <form onSubmit={this.handleCitySubmit}>
                    <label>
                        Pick a City: 
                        <input type="text" onInput={this.handleCityInput} name="city"/>
                    </label>
                    <button type="submit">Explore!</button>
                </form>
        {
            this.state.error
                ?
                <p>{this.state.errorMessage}</p>
                :
                <ul>
                    {this.state.cityData.display_name}
                    {this.state.cityData.lat}
                    {this.state.cityData.lon}
                </ul>
        }
        {/* <main>
                    <p>Site in progress</p>
                </main> */}
            </>
        )
    }
}

export default Main;