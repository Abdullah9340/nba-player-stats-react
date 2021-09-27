import Player from "./Player";

function PlayerList(props) {
  return (
    <div>
      {props.players.map((playerID, i) => {
        if (i >= 5) {
          return;
        } else {
          return <div key={i}>{Player({ id: playerID })}</div>;
        }
      })}
    </div>
  );
}

export default PlayerList;
