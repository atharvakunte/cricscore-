import React from "react";


export const MatchCard = ({match}) => {

    const matchTitle =match.match_title? match.match_title:"";
    const matchDate = match.date?match.date:"";
    const matchSub = match.match_subtitle?match.match_subtitle:"";
    const matchStatus = match.status?match.status:false;
    const matchId = match.id?match.id:'';


    return(
        <div className="p-3 m-1 h-100">
        <div className="card border-0 shadow h-100">
            <div className="card-header text-center">
                {matchSub}
            </div>
            <div className="card-body">
                <h5 className="card-title text-center">{matchTitle}</h5>
                <h6 className="card-title">{matchDate}</h6>
                <p className="text-success">{matchStatus}</p>
                <a href={`/score/${matchId}`} className="btn btn-success">See Score</a>
            </div>
        </div>
        </div>
    )

}
