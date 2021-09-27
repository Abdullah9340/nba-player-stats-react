import axios from "axios";
import "./PlayerSeasons.css"
import { useEffect, useState } from "react";

function PlayerSeasons(props) {
  const seasonInfo = props.season;
  const [seasonYear, setSeasonYear] = useState("");
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [totalAssists, setTotalAssists] = useState(0);
  const [totalRebounds, setTotalRebounds] = useState(0);
  const [totalBlocks, setTotalBlocks] = useState(0);
  const [fta, setFta] = useState(0);
  const [ftm, setFtm] = useState(0);
  const [team, setTeam] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [totalSteals, setTotalSteals] = useState(0);
  const [totalTOV, setTotalTOV] = useState(0);
  const [totalPF, setTotalPF] = useState(0);
  const [fg_PCT, setFg_PCT] = useState(0.0);
  const [fg3_PCT, setFg3_PCT] = useState(0.0);
  const [ft_PCT, setFt_PCT] = useState(0.0);

  useEffect(() => {
    setSeasonYear(seasonInfo.SEASON_ID);
    setGamesPlayed(seasonInfo.GP);
    setTotalPoints(seasonInfo.PTS);
    setTotalAssists(seasonInfo.AST);
    setTotalRebounds(seasonInfo.REB);
    setTotalBlocks(seasonInfo.BLK);
    setFta(seasonInfo.FTA);
    setFtm(seasonInfo.FTM);
    setTeam(seasonInfo.TEAM_ABBREVIATION);
    setMinutes(seasonInfo.MIN);
    setTotalSteals(seasonInfo.STL);
    setTotalTOV(seasonInfo.TOV);
    setTotalPF(seasonInfo.PF);
    setFg_PCT(seasonInfo.FG_PCT);
    setFg3_PCT(seasonInfo.FG3_PCT);
    setFt_PCT(seasonInfo.FT_PCT);
  }, [seasonInfo]);

  return (
    <>
      <tr>
        <td>{seasonYear + " "}</td>
        <td>{team + " "} </td>
        <td>{gamesPlayed + " "}</td>
        <td>{(minutes / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalPoints / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalAssists / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalRebounds / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalSteals / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalBlocks / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(totalTOV / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(ftm / gamesPlayed).toFixed(1) + " "}</td>
        <td>{(fg_PCT * 100).toFixed(2) + " "}</td>
        <td>{(fg3_PCT * 100).toFixed(2) + " "}</td>
        <td>{(ft_PCT * 100).toFixed(2) + " "}</td>
      </tr>
    </>
  );
}

export default PlayerSeasons;
