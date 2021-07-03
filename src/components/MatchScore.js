import React, {Component, useState, useEffect} from "react";
import { useParams, withRouter } from "react-router-dom";
import { getMatchScore } from "./apicalls";
import {Scorecard} from "./Scorecard";
import {Accordion} from "./Accordion";


export const MatchScore  = async () => {
  let {matchId} = useParams();

  const getScore = async() =>{
  var results 
   await getMatchScore(matchId).then((data)=>{
      results = data.results;
    }).catch(err=>console.log(err))
    return results;
  }

    var score  = await getScore();

  console.log(score);

  return (
    <div className="container mt-5">
      <Scorecard data ={score}/>
      {/* <Accordion data = {data}/> */}
    </div>
  )
  
}