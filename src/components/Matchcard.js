import React from "react";


export const MatchCard = ({match}) => {

    const matchTitle =match? match.match_title:"";
    const matchDate = match?match.date:"";
    const matchSub = match?match.match_subtitle:"";
    const matchStarted = match?match.status:false;
    const matchId = match?match.id:'';

    

    return(
        <div className="p-2">
        <div className="card">
            <div className="card-header text-center">
                {matchSub}
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{matchTitle}</h5>
                <h6 className="card-title">{matchDate}</h6>
                <p className="text-success">match started</p>
                {
                    matchStarted && <a href={`/score/${matchId}`} className="btn btn-success">See Score</a>
                }
            </div>
        </div>
        </div>
    )

}
