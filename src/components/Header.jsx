import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

export default function NavBar({ search, setSearch }) {
  return (
    <header className="top-bar">
      <h1 className="brand-title">icarros</h1>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <input
          type="text"
          placeholder="Busque por marca..."
          className="input-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </header>
  );
}
