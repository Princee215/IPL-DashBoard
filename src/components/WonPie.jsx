import React from "react";
import { Chart } from "chart.js";
import { registerables } from "chart.js";
import { Pie } from "react-chartjs-2";
Chart.register(...registerables);

function WonPie(props) {
  let won = props.won;
  let lost = props.played - props.won;
  return (
    <Pie
      data={{
        labels: [props.name1, props.name2],
        datasets: [
          {
            label: "My First Dataset",
            data: [won, lost],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)"],
            hoverOffset: 4
          }
        ]
      }}
    />
  );
}

export default WonPie;
