import { FaSearch } from "react-icons/fa";
import "./index.css";

const Header = (props) => {
  const { onchangeSearchInput, onKeyUpSearchInput, searchInput } = props;
  return (
    <nav className="header-container">
      <div className="left-container">
        <strong className="title">Weather Application</strong>
      </div>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search City"
          className="search-input"
          value={searchInput}
          onChange={onchangeSearchInput}
          onKeyUp={onKeyUpSearchInput}
        />
      </div>
    </nav>
  );
};

export default Header;
