import "./index.css";

const CurrentWeather = (props) => {
  const { currentWeatherData, address } = props;
  const { temp, humidity, conditions } = currentWeatherData;
  console.log(currentWeatherData);

  const windSpeed = currentWeatherData.wspd;
  const heatIndex = currentWeatherData.heatindex;
  // const  iconString={weather.conditions}
  // const  conditions={weather.conditions}

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
      <div className="icon-temp">
        {/* <img src={icon} alt="weather_icon" /> */}
        <p className="temp">{temp} &deg;C</p>
      </div>
      <div className="place">{address}</div>
      <div className="date-time">
        <p className="date">{new Date().toDateString()}</p>
        <p className="time"> {time}</p>
      </div>
      <div className="windSpeed-humidity">
        <p className="">
          Wind Speed <p className="font-normal">{windSpeed} km/h</p>
        </p>
        <p className="">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="Heat-index">
        <p className="">Heat Index</p>
        <p className="">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="hr-line" />
      <div className="condition">{conditions}</div>
    </div>
  );
};

export default CurrentWeather;
