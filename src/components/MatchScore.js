import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMatchScore } from "./apicalls";
import {Scorecard} from "./Scorecard";
import {Accordion} from "./Accordion";


export const MatchScore = () => {
  let {matchId} = useParams();
  
  const [score, setScore] = useState({})

  getMatchScore(matchId).then((data)=>{
    setScore(data.results);
    console.log(data.results);
  }).catch(err=>console.log(err))
  console.log(score);

  return (
    <div className="container mt-5">
      <Scorecard data ={score}/>
      {/* <Accordion data = {data}/> */}
    </div>
  )
  
}