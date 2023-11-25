import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Producto", "Precio"],
  ["TV inteligente", 400],
  ["Laptop Lenovo", 2000],
  ["Auriculares inalambricos", 200],
  ["Apple Watch", 1500],
  ["Camara DSLR", 3000],
  ["Xbox", 4000],
  ["SmartWatch",5000],
  ["Smartphone",3550],
  ["Alexa",2600],
  ["Bombilla inteligente", 500],

];
export const options = {
  title: "Productos inteligentes",
  pieHole: 0.4,
  is3D: false,
};

export default function DonutChar() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
