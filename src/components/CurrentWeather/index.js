import "./index.css";

const CurrentWeather = (props) => {
  const { currentWeatherData } = props;
  const {
    temp,
    place,
    windspeed,
    humidity,
    heatindex,
    conditions,
  } = currentWeatherData;

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
      <div className="flex w-full just-center, items-center gap-4 mt-12 mb-4">
        {/* <img src={icon} alt="weather_icon" /> */}
        <p className="font-bold text-5xl flex justify-center items-center">
          {temp} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2"> {time}</p>
      </div>
      <div className="w-full flex justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed <p className="font-normal">{windspeed} km/h</p>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
          Humidity <p className="font-normal">{humidity} gm/m&#179;</p>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-lg">Heat Index</p>
        <p className="text-lg">{heatindex ? heatindex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default CurrentWeather;
