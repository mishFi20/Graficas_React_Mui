import React from 'react'

import { Chart } from "react-google-charts";

export const data = [
    [ "Nombre","Precio","Categoria"],
    [ "Computadora Hp", 1100,"Tecnologia"],
    [ "Computadora Dell", 1200,"Tecnologia"],
    [ "Computadora Lenovo",1300,"Tecnologia"],
    ["Computadora Asus", 1400, "Tecnologia"],
    ["Computadora Apple", 1500, "Tecnologia"],
    ["Computadora Samsung",1600,"Tecnologia"],
    ["Computadora Acer",1700,"Tecnologia"],
    ["Computadora Toshiba",1800,"Tecnologia"],
    ["Computadora Sony",1900,"Tecnologia"],
    ["Computadora Huawei",2000,"Tecnologia"],
    ["Computadora LG",2100,"Tecnologia"],
    ["Computadora Xiaomi",2200,"Tecnologia"],
    ["Computadora Motorola",2300,"Tecnologia"],
    ["Computadora Nokia",2400,"Tecnologia"],
    ["Computadora Alcatel",2500,"Tecnologia"],
    ["Computadora HTC",2600,"Tecnologia"],
    ["Computadora Oppo",2700,"Tecnoologia"],
    ["Computadora ZTE",2800,"Tecnologia"],
    ["Computadora One Plus",2900,"Tecnologia"]
  
  ];
  export const options = {
    title: "Productos",
  };
  
  export default function GraficProductos() {
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
  

