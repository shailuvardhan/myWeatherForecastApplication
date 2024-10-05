import { Component } from "react";
import axios from "axios";
import Header from "../Header";
import CurrentWeather from "../CurrentWeather";

class WeatherApp extends Component {
  state = {
    searchInput: "Hyderabad",
    address: "",
    fortNightList: [],
    currentWeatherData: {},
  };

  onchangeSearchInput = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  onKeyUpSearchInput = (event) => {
    if (event.key === "Enter") {
      this.getWeatherReport();
    }
  };

  componentDidMount() {
    this.getWeatherReport();
  }

  getWeatherReport = async () => {
    const jwtToken = "a7f43ce2d0mshb9ac11c1ee59de8p12110djsnea246a8ed2ea";
    const { searchInput } = this.state;

    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: searchInput,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },
      headers: {
        "X-RapidAPI-Key": jwtToken,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      const fetchedData = Object.values(response.data.locations)[0];

      this.setState({
        address: fetchedData.address,
        fortNightList: fetchedData.values,
        currentWeatherData: fetchedData.values[0],
      });
    } catch (e) {
      console.error(e);
      // if the api throws error.
      alert("This place does not exist");
    }
  };

  render() {
    const {
      searchInput,
      address,
      fortNightList,
      currentWeatherData,
    } = this.state;

    return (
      <div className="weather-app-container">
        <Header
          onchangeSearchInput={this.onchangeSearchInput}
          onKeyUpSearchInput={this.onKeyUpSearchInput}
          searchInput={searchInput}
        />
        <div className="Application-container">
          <CurrentWeather
            currentWeatherData={currentWeatherData}
            address={address}
          />
        </div>
      </div>
    );
  }
}

export default WeatherApp;
