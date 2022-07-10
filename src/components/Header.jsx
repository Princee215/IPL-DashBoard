import React from "react";
import WonPie from "./WonPie";

function Header(props) {
  let wp = ((props.won / props.played) * 100).toFixed(2);
  let tp = ((props.toss / props.played) * 100).toFixed(2);

  return (
    <div>
      <div className="individual">
        <h1 className="heading">{props.name}</h1>
        <p>
          Total Matches Played by <span className="bold">{props.name}</span>{" "}
          Till IPL Season 10 are <span className="bold">{props.played}</span>.
        </p>
        <div className="charts">
          <div className="piechart">
            <WonPie
              played={props.played}
              won={props.won}
              name1="Won Matches"
              name2="Lost Matches"
            />
          </div>
          <div className="piechart">
            <WonPie
              played={props.won}
              won={props.wonBatFirst}
              name1="Won Batted 1st"
              name2="Won Batted 2nd"
            />
          </div>
          <div className="piechart">
            <h1 className="x">{wp}%</h1>
            <p>Winning Percentage</p>
            <h1 className="x">{tp}%</h1>
            <p>Tosses Won</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
