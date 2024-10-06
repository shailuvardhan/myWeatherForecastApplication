import { Component } from "react";
import axios from "axios";
import Header from "../Header";
import CurrentWeather from "../CurrentWeather";
import MiniCard from "../MiniCard";

import clear from "../../Assets/Images/clear.jpg";
import cloudy from "../../Assets/Images/Cloudy.png";
import fog from "../../Assets/Images/fog.png";
import rainyCity from "../../Assets/Images/Rainy_city.png";
import snow from "../../Assets/Images/Snow.png";
import sunnyCity from "../../Assets/Images/Sunny_city.png";
import thunderstormCity from "../../Assets/Images/thunderstorm-city.png";

import "./index.css";

class WeatherApp extends Component {
  state = {
    searchInput: "Hyderabad",
    address: "",
    WeekForecastList: [],
    currentWeatherData: {},
    setImage: clear,
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

      if (fetchedData.values[0].conditions) {
        let imageString = fetchedData.values[0].conditions;
        if (imageString.toLowerCase().includes("clear")) {
          this.setState({ setImage: clear });
        } else if (imageString.toLowerCase().includes("cloud")) {
          this.setState({ setImage: cloudy });
        } else if (
          imageString.toLowerCase().includes("rain") ||
          imageString.toLowerCase().includes("shower")
        ) {
          this.setState({ setImage: rainyCity });
        } else if (imageString.toLowerCase().includes("snow")) {
          this.setState({ setImage: snow });
        } else if (imageString.toLowerCase().includes("fog")) {
          this.setState({ setImage: fog });
        } else if (
          imageString.toLowerCase().includes("thunder") ||
          imageString.toLowerCase().includes("storm")
        ) {
          this.setState({ setImage: thunderstormCity });
        } else if (
          imageString.toLowerCase().includes("sun") ||
          imageString.toLowerCase().includes("sunny")
        ) {
          this.setState({ setImage: sunnyCity });
        }
      }

      this.setState({
        address: fetchedData.address,
        WeekForecastList: fetchedData.values,
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
      WeekForecastList,
      currentWeatherData,
      setImage,
    } = this.state;

    return (
      <div
        className="app"
        style={{
          backgroundImage: `url(${setImage})`,
          backgroundSize: "cover",
          color: "white",
        }}
      >
        <Header
          onchangeSearchInput={this.onchangeSearchInput}
          onKeyUpSearchInput={this.onKeyUpSearchInput}
          searchInput={searchInput}
        />
        <div className="Application-container">
          <CurrentWeather
            currentWeatherData={currentWeatherData}
            iconString={currentWeatherData.conditions}
            address={address}
          />
          <ul className="mini-card-list">
            {WeekForecastList.slice(1, 7).map((cardItem) => (
              <MiniCard
                key={cardItem.id}
                time={cardItem.datetime}
                temp={cardItem.temp}
                iconString={cardItem.conditions}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default WeatherApp;
