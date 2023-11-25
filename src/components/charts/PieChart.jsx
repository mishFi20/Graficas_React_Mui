import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Productos", "Precios"],
  ["Leche", 40],
  ["Pasta", 10],
  ["Carne", 60],
  ["Detergente", 15],
  ["Cepillo", 5],
  ["Nachos", 20],
  ["Licuadora", 100],
  ["Chocolate", 25],
  ["Atun", 45],
  ["Papel higienico", 80],

];


export const options = {
  title: "Productos",
  is3D: true,
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
