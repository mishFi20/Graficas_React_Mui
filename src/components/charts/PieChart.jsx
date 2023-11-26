import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Provincia", "Poblacion"],
  ["Argentina",2500]
  ["Germany", 22250],
  ["United States", 300020],
  ["Brazil", 400225],
  ["Canada", 500355],
  ["France", 600522],
  ["RU", 700225],
  
];

export default function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}

      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
}