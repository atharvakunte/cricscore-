import React from 'react'

export const Scorecard = (data) => {
 console.log(data);
const toss = data.data.live_details.match_summary.toss?data.data.live_details.match_summary.toss:"";
const homeTeam = data.data.fixture.home.name?data.data.fixture.home.name:"";
const awayTeam = data.data.fixture.away.name?data.data.fixture.away.name:"";
const homeScores = data.data.live_details.match_summary.home_scores?data.data.live_details.match_summary.home_scores:"";
const awayScores = data.data.live_details.match_summary.away_scores?data.data.live_details.match_summary.away_scores:"";
const last_18_balls = data.data.live_details.stats.last_18_balls?data.data.live_details.stats.last_18_balls:[];
const status = data.data.live_details.match_summary.status?data.data.live_details.match_summary.status:"";

// console.log(toss);

const balls = (ball) => {
    var runs = ball.runs
    var text = ""
    var style = "badge rounded-pill bg-light"

    if (ball.isDismissal){
        text = 'W'
        style = 'badge rounded-pill bg-danger'
    }
    if (ball.isWide) {
        text = 'WD'
        style = 'badge rounded-pill bg-warning'
    }
    if (ball.isNoBall) {
        text = 'NB'
        style = 'badge rounded-pill bg-warning'
    }
    if (ball.isBye) {
        text = 'B'
    }
    if (ball.isLegBye) {
        text = 'LB'
    }
    if (ball.isBoundry) {
        if (runs === '4') {
            style ="badge rounded-pill bg-primary"
        }
        else{
            style ="badge rounded-pill bg-success"
        }
    }
    console.log(runs)
    console.log(text)
    console.log(style);
    return(
            <span className={style}>{runs}{text}</span>
    )
}

    return (
        <div>
            <div className=" card " >

                <div className="card-header text-center">
                    {toss}
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <div className="card-body text-center">
                                <h4 className="card-title">{homeTeam}</h4>
                                <h2 className="card-text">{homeScores}</h2>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <div className="card-body text-center">
                                <h4 className="card-title">{awayTeam}</h4>
                                <h2 className="card-text">{awayScores}</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card text-center">

                    <div className="card-body">
                        <h4 className="card-title">
                        
                            {last_18_balls.map((ball, index) => {
                               <div key={index}>
                                   {balls(ball)}
                               </div>
                            })}
                        </h4>
                    </div>
                    <div className="card-footer text-muted">
                    <h5 className="card-text">{status}</h5>
                    </div>
                </div>


            </div>
        </div>
    )
}
