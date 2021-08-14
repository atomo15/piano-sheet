
import React, { useEffect, useState, Fragment } from "react";
//import {Papa} from "papaparse";
//import {fs} from "fs";
import data from './piano-sheet.csv';
import { csv } from "d3";
import {Button} from '@material-ui/core'


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
            <li>Song - {item.Song}</li>
            <li>Artist - {item.Artist}</li>
            {/* <li>URL -- {item.URL}</li> */}
            <li><a href={item.URL}><button type="submit">Get Sheet</button></a></li>
            <br />
          </Fragment>
        ))}
      </ul>
    </center>
        
  );
}