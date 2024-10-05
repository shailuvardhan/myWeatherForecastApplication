import "./index.css";

const MiniCard = (props) => {
  const { time, temp, iconString } = props;
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
        {/* <img src={icon} alt="forecast not available" className="icon-img" /> */}
      </div>
      <p className="temp">{temp}&deg;C</p>
    </li>
  );
};

export default MiniCard;
