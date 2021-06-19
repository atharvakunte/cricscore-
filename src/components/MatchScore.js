import React from "react";
import { useParams } from "react-router-dom";
import { getMatchScore } from "./apicalls";
import {Scorecard} from "./Scorecard";
import {Accordion} from "./Accordion"
export const MatchScore = () => {
  let {matchId} = useParams()

  const match = getMatchScore(matchId)
  return (
    <div>
      <Scorecard/>
      {/* <Accordion /> */}
    </div>
  )
  
}