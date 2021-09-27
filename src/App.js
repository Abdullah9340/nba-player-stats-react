import "./App.css";
import { useState, useRef } from "react";
import axios from "axios";
import PlayerList from "./PlayerList";
function App() {
  const searchValue = useRef("Search for any player!");
  const [players, setPlayers] = useState([]);

  const onSearch1 = (e) => {
    e.preventDefault();
    setPlayers([]);
    axios
      .get(`http://127.0.0.1:5000/getPlayer/${searchValue.current.value}`)
      .then((playerID) => {
        const tempArray = playerID.data.info.map((player) => {
          return player.id;
        });
        setPlayers(tempArray);
      });
  };

  return (
    <div className="pageBackground">
      <h1 className="header">Nba Player Database</h1>
      <div className="searchBox">
        <input type="search" name="" id="searchBar" ref={searchValue} />
        <input
          type="button"
          id="searchButton"
          value="search"
          onClick={onSearch1}
        />
      </div>
      <PlayerList players={players} />
    </div>
  );
}

export default App;
