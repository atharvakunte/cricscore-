import React from 'react'

export const Scorecard = ({
    toss,
    homeTeam,
    awayTeam,
    homeScores,
    awayScores,
    status
}) => {


    return (
        <div className="container mt-5">
            <div className=" card " >

                <div className="card-header text-center">
                    Toss - India
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
                        <h4 className="card-title">{last_18_balls}</h4>
                    </div>
                    <div className="card-footer text-muted">
                    <h5 className="card-text">{status}</h5>
                    </div>
                </div>


            </div>
        </div>
    )
}
