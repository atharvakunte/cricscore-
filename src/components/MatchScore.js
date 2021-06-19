import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { getMatchScore } from "./apicalls";
import {Scorecard} from "./Scorecard";
import {Accordion} from "./Accordion"
export const MatchScore = () => {
  let {matchId} = useParams()

  const [data, setData] = useState([]);

  const getData = () => {
    getMatchScore(matchId).then((data)=>{
      if(data.error){
        console.error(data.error);
      }
      else{
        setData(data.results);
      }
    })
  }

  useEffect(() => {
    getData();
  },[])



  return (
    <div className="container mt-5">
      <Scorecard data ={data}/>
      {/* <Accordion data = {data}/> */}
    </div>
  )
  
}