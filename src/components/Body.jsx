import React from "react";
import data from "../data";
import Header from "./Header";

function Body() {
  const teams = new Set();

  data.forEach((item) => {
    teams.add(item.team1);
  });

  const value = [...teams];
  const team = [];

  value.forEach((item) => {
    let a = 0,
      b = 0,
      c = 0,
      d = 0,
      x = item;
    data.forEach((i) => {
      if (i.team1 === x) a++;
      if (i.team2 === x) a++;
      if (i.winner === x) b++;
      if (i.toss_winner === x) c++;
      if (
        i.winner === x &&
        ((i.toss_winner === x && i.toss_decision === "bat") ||
          (i.toss_winner !== x && i.toss_decision === "field"))
      )
        d++;
    });
    const obj = {
      name: item,
      played: a,
      won: b,
      toss: c,
      wonBatFirst: d
    };
    team.push(obj);
  });

  return (
    <div>
      {team.map((i, index) => (
        <Header
          key={index}
          name={i.name}
          played={i.played}
          won={i.won}
          toss={i.toss}
          wonBatFirst={i.wonBatFirst}
        />
      ))}
    </div>
  );
}

export default Body;
