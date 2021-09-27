import { useState, useEffect } from "react";
import axios from "axios";
import PlayerSeasons from "./PlayerSeasons";
function Player(props) {
  const playerID = props.id;
  const [playerURL, setPlayerURL] = useState("");
  const [seasons, setSeasons] = useState([]);
  const [name, setName] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      await fetch(`http://127.0.0.1:5000/getPlayer/picture/${playerID}`)
        .then((res) => res.json())
        .then((res) => setPlayerURL(res.info))
        .catch((e) => console.error(e));
      await fetch(`http://127.0.0.1:5000/getPlayer/seasons/${playerID}`)
        .then((res) => res.json())
        .then((res) => {
          setSeasons(res.info)
          setName(res.name.full_name)
        })
        .catch((e) => console.error(e));
    };
    const timer = setTimeout(() => {
      fetchData();
    }, Math.round(((Math.random() * 1000) + 500)));

    return () => clearTimeout(timer);

  }, [props.id]);

  return (
    <div>
      <img src={playerURL} alt = "PICTURE NOT FOUND"></img>
      <h3>{name}</h3>
      <table>
        <tbody>
          <tr>
            <th>SEASON</th>
            <th>TEAM</th>
            <th>GP</th>
            <th>MPG</th>
            <th>PPG</th>
            <th>APG</th>
            <th>RPG</th>
            <th>SPG</th>
            <th>BPG</th>
            <th>TOV</th>
            <th>FTM</th>
            <th>FG %</th>
            <th>3PT %</th>
            <th>FT %</th>
          </tr>
          {seasons.map((season, i) => {
            return <PlayerSeasons key={i} season={season} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Player;
