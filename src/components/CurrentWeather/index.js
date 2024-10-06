import { useEffect, useState } from "react";

import sun from "../../Assets/Icons/sun.png";
import cloud from "../../Assets/Icons/cloud.png";
import fog from "../../Assets/Icons/fog.png";
import rain from "../../Assets/Icons/rain.png";
import snow from "../../Assets/Icons/snow.png";
import storm from "../../Assets/Icons/storm.png";
import wind from "../../Assets/Icons/windy.png";

import "./index.css";

const CurrentWeather = (props) => {
  const { currentWeatherData, address, iconString } = props;
  const { temp, humidity, conditions } = currentWeatherData;
  console.log(currentWeatherData);

  const windSpeed = currentWeatherData.wspd;
  const heatIndex = currentWeatherData.heatindex;
  // const  iconString={weather.conditions}
  // const  conditions={weather.conditions}
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("clear")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString]);

  const locale = "en";
  const today = new Date();
  //   const day = today.toLocaleDateString(locale, { weekday: "long" });
  //   //   const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString(locale, {
  //   //     month: "long",
  //   //   })}\n\n`;
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  console.log(time);
  return (
    <div className="main-glass-card">
      <div className="icon-temp hori">
        <img src={icon} alt="weather_icon" className="weather-icon" />
        <p className="main-temp temp">{temp} &deg;C</p>
      </div>
      <div className="place">{address}</div>
      <div className="date-time  hori">
        <p className="date">{new Date().toDateString()}</p>
        <p className="time"> {time}</p>
      </div>
      <div className="windSpeed-humidity  hori">
        <p className="box blue">
          Wind Speed <p className="font-normal">{windSpeed} km/h</p>
        </p>
        <p className="box green">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="Heat-index  hori">
        <p className="">Heat Index</p>
        <p className="">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="hr-line" />
      <div className="condition">{conditions}</div>
    </div>
  );
};

export default CurrentWeather;
