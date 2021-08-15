
import React, { useEffect, useState, Fragment } from "react";
//import {Papa} from "papaparse";
//import {fs} from "fs";
import data from './piano-sheet.csv';
import { csv } from "d3";
import {Button} from '@material-ui/core'
//import {getVideoDurationInSeconds} from 'react-get-video-duration'

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
      <h1>Piano sheets</h1>
      <table style={{border:'10px solid'}}>
      {/* <ul> */}
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Sheet</th>
        </tr>
        {dataset.map((item, i) => (
          
          // <Fragment key={i}>
          //   <li>Song - {item.Song}</li>
          //   <li>Artist - {item.Artist}</li>
          //   {/* <li>URL -- {item.URL}</li> */}
          //   <li><a href={item.URL}><button type="submit">Get Sheet</button></a></li>
          //   <br />
          // </Fragment>
          <tr>
            <td>{item.Song}</td>
            <td>{item.Artist}</td>
            <td><a href={item.URL}><button type="submit">Get Sheet</button></a></td>
          </tr>
        ))}
      {/* </ul> */}
      </table>
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/rMN2rCEuWOs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
    </center>
        
  );
}