import React from "react";
import { useParams } from "react-router-dom";
import { getMatchScore } from "./apicalls";

export const MatchScore = () => {
  let {matchId} = useParams()

  const match = getMatchScore(matchId)

  
}