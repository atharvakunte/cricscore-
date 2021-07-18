import React from "react";
import { useState, useEffect } from "react";
import { getMatches } from "./apicalls";
import{MatchCard} from './Matchcard'

export const Home = () => {

    const [matches, setMatches]= useState([])

    const loadMatches = () =>{
        getMatches().then((data)=>{
           
            setMatches(data.results);

        }).catch((err)=>{
            console.error(err);
        })
    }
    
    useEffect(() => {
        loadMatches();
    },[])
    
    console.log(matches);
    return(
        <div className="bg-light">
          <div className="container-fluid bg-dark text-white text-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/cricscore-c2064.appspot.com/o/CricScorelogo.png?alt=media&token=5ed67ca7-7aff-4455-8dc3-3a3850b1291e" alt="CricScore" height="100px"></img>
          </div>
          <div className="row">
              {matches.map((match,index) => {
                  return(
                      <div className="col-lg-3 col-md-4 col-sm-6">
                      <div className="h-100" key={index}>
                          <MatchCard match={match}/>
                      </div>
                      </div>
                  );
              })}
          </div>
        </div>
    )
}