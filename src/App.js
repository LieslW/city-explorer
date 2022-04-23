import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import CityForm from './CityForm';
import ResultsCard from './ResultsCard';
import ErrorModal from './ErrorModal';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: null,
      error: false,
      errorMessage: 'None',
      showModal: false,
    }
  }


  hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  openModal = () => {
    this.setState({
      showModal: true,
    })
  }


  handleCityInput = (e) => {
    this.setState({
      city: e.target.value
    })
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(url);

      this.setState({
        cityData: cityData.data[0]
      });
    } catch (error) {
      console.log('error: ', error);
      this.setState({
        error: true,
        showModal: true, 
        errorMessage: `An Error Occurred: ${error.message}`
      })
    }
  }

  
  render() {

    return (
      <>
        <Header />
        <CityForm
          handleInput={this.handleCityInput}
          handleCitySubmit={this.handleCitySubmit}
        />
        
        {this.state.cityData ? 
        <ResultsCard 
        name={this.state.cityData.display_name}
        lat={this.state.cityData.lat}
        lon={this.state.cityData.lon}
        /> : null }

        <ErrorModal
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          showModal={this.state.showModal}
          openModal={this.openModal}
          hideModal={this.hideModal}
        />
        <Footer />
      </>
    )
  }
}

export default App;
