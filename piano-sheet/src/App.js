
import React, { useEffect, useState, Fragment } from "react";
import {Papa} from "papaparse";
import {fs} from "fs";
import data from './piano-sheet.csv';
import * as d3 from 'd3';
import { csv } from "d3";





export default function App() {
  const [dataset, setDataset] = useState([]);
  
  useEffect(() => {
    csv(data).then(data => {
      setDataset(data);
    });
  },[]);
  //console.log(a.length)
  return (
    <center>
      <h1>Data from sheets</h1>
      <ul>
        {dataset.map((item, i) => (
          
          <Fragment key={i}>
            <li>URL -- {item.URL}</li>
            <li>Song - {item.Song}</li>
            <li>Artist - {item.Artist}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </center>
  );
}