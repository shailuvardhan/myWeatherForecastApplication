import React, { useEffect, useState } from "react";
import sun from "../../Assets/Icons/sun.png";
import cloud from "../../Assets/Icons/cloud.png";
import fog from "../../Assets/Icons/fog.png";
import rain from "../../Assets/Icons/rain.png";
import snow from "../../Assets/Icons/snow.png";
import storm from "../../Assets/Icons/storm.png";
import wind from "../../Assets/Icons/windy.png";

import "./index.css";

const MiniCard = (props) => {
  const { time, temp, iconString } = props;
  console.log(iconString);
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
  return (
    <li className="glass-card mini">
      <p className="time">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr className="hr-line" />
      <div className="icon-img-container">
        <img src={icon} alt="forecast not available" className="icon-img" />
      </div>
      <p className="temp">{temp}&deg;C</p>
    </li>
  );
};

export default MiniCard;
