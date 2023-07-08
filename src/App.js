import DataGen from "./component/data_generator";
import Marker from "./component/Marker";
import './App.css';

import React, { useRef, useState } from 'react'
function App() {
  let [data,datasetter]=useState({ms:0,s:0,m:0,h:0});
  let [state,setState]=useState(0);
  let interval=useRef();
  let [arr,arrsetter]=useState([]);
  let hv=data.h;
  let mv=data.m;
  let sv=data.s;
  let msv=data.ms;
  function mark(){
    if(state==1){
    arrsetter(
      (pre)=>{
        return [...pre,data];
      }
    );
    }
  }
  function pause(){
    setState(0);
    clearInterval(interval.current);
  }
  function start(){
    if(msv>=100){
      msv=0;
      sv=sv+1;
    }
    if(sv>=60){
      sv=0;
      mv=mv+1;
    }
    if(mv>=60){
      mv=0;
      hv=hv+1;
    }
    if(hv>24){
      hv=mv=sv=msv=0;
    }
    return datasetter({h:hv,m:mv,s:sv,ms:msv})
  }
  
  function run(){
    if(state===0){
    interval.current=setInterval(()=>{
    msv=msv+1;
    start();
    },10)
    setState(1);
  }
  }
  function reset(){
    pause();
    datasetter({ms:0,s:0,m:0,h:0});
    arrsetter([]);
  }
  
  return (
    <div>
    <div className="App">
     <div className="stop_watch">
      <DataGen data={data}/>
      <div className="button">
      <button className="btn" onClick={run}>Start</button>
      <button className="btn" onClick={pause}>Pause</button>
      <button className="btn" onClick={reset}>Reset</button>
      <button className="btn" onClick={mark}>Mark</button>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <Marker data={arr}/>
    </div>
  );
}

export default App;
