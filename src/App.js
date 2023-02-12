import React, { useState } from "react";
import Button from "./components/Button";

import "./App.css";
import StatisticList from "./components/StatisticList";

const App = () => {
  const [good,setGoodState] = useState(0);
  const [neutral,setNeutralState] = useState(0)
  const [bad,setBadState] = useState(0);
  
  const handleSetGoodState =()=>{
setGoodState(prev=>prev+1)

  }
  const handleSetNeutralState  = ()=>{
setNeutralState(prev=>prev+1)
  }
  const handleSetBadState=()=>{
setBadState(prev=>prev+1)
  }
  const total = good + bad+neutral;
  const goodPercent = (good/total) *100;
  const neutralPercent = (neutral/total) *100;
  return (
    <div className="App"> 
      <h1>Give Feedback</h1>

      <div className="wrapper">
      <div className="options">
        <Button click={handleSetGoodState} name='good'/>
        <Button click={handleSetNeutralState} name='neutral'/>
        <Button click={handleSetBadState} name='bad'/>
      </div>
      <h1>Statistics</h1>
      {total &&  <StatisticList
      good = {good}
      bad= {bad}
      neutral={neutral}
      goodPercent={goodPercent}
      neutralPercent={neutralPercent}
      /> }
     
      </div>
    </div>
  );
};

export default App;
