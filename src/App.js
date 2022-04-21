import React from 'react';
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
      // mapUrl: '',
      cityData: 0,
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
      // console.log('test:', this.state.city);
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`;
      let cityData = await axios.get(url);
      // console.log(cityData.data[0]);
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
    // let cityList = this.state.cityData.map((city, idx) => {
    //   console.log("index: ", idx);
    //   return(
    //     <ResultsCard
    //     key={idx}
    //     city={city}
    //     />
    //     ) 
    //   });
      // console.log('test: ', this.state.cityData);
      // console.log('app state', this.state);
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
        {/* <main>
            {cityList}
        </main> */}
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
