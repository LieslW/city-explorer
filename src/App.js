import React from 'react';
import './App.css';
import CityForm from './CityForm';
import ErrorModal from './ErrorModal';
import Header from './Header';
// import Main from './Main';
import ResultsCard from './ResultsCard';
import Footer from './Footer';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapUrl: '',
      // locationData: [],
      city: '',
      cityData: {},
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
    return (
      <>
      <Header />
        <CityForm
          handleSubmit={this.handleCityInput}
          handleCitySubmit={this.handleCitySubmit}
        />
        <ResultsCard
          mapUrl={this.state.mapUrl}
        />
        <main>
          {}
        </main>
        <ErrorModal
          error={this.state.error}
          errorMessage={this.state.errorMessage}
          showModal={this.state.showModal}
          openModal={this.openModal}
          hideModal={this.hideModal}
        />
        {/* <Main /> */}
        <Footer />
      </>
    )
  }
}

export default App;
