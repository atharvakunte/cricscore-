import React from 'react';

export const Accordion = ({data}) => {
const stats = ""
const scorecard = ""
const homeTeam = ""
const awayTeam = ""
const homeTeamSheet = ""
const awayTeamSheet = ""


    return(
        <div>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                            Partnership
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div className="accordion-body">
                                <p>{stats.partnership_player_1} &emsp; {stats.partnership_player_1_runs}({stats.partnership_player_1_balls})</p><br/>
                                <p>{stats.partnership_player_2} &emsp; {stats.partnership_player_2_runs}({stats.partnership_player_2_balls})</p><br/>
                                <p><strong>Partnership: {stats.partnership_runs}({stats.partnership_overs})</strong></p>
                            </div>
                        </div>
                    </div>
                    {scorecard.map((card, index) => {
                        <div key ={index} className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                             Innings {index} Scorecard
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <h6>Batting</h6><br/>
                                <table className="table table-borderless">
                                    <tr>
                                        <th scope="col">Player</th>
                                        <th scope="col">How Out</th>
                                        <th scope="col">Runs</th>
                                        <th scope="col">Balls</th>
                                        <th scope="col">Fours</th>
                                        <th scope="col">Sixes</th>
                                        <th scope="col">SR</th>
                                    </tr>
                                    {card.batting.map((player, index) => {
                                        <tr key={index}>
                                        <td>{player.player_name}</td>
                                        <td>{player.how_out}</td>
                                        <td>{player.runs}</td>
                                        <td>{player.balls}</td>
                                        <td>{player.fours}</td>
                                        <td>{player.sixes}</td>
                                        <td>{player.strike_rate}</td>
                                        </tr>
                                    })}
                                </table>
                                <br/>
                                <h6>Yet to bat</h6><br/>
                                <table className="table table-borderless">
                                    {card.batting.map((player, index) => {
                                        <tr key={index}>
                                        <td>{player.player_name}</td>
                                        </tr>
                                    })}
                                </table>
                                <br/>
                                <h6>Bowling</h6>
                                <table className="table table-borderless">
                                    <tr>
                                        <th scope="col">Player</th>
                                        <th scope="col">Overs</th>
                                        <th scope="col">Maidens</th>
                                        <th scope="col">Runs</th>
                                        <th scope="col">Wickets</th>
                                        <th scope="col">Economy</th>
                                    </tr>
                                    {card.batting.map((player, index) => {
                                        <tr key={index}>
                                        <td>{player.player_name}</td>
                                        <td>{player.overs}</td>
                                        <td>{player.maidens}</td>
                                        <td>{player.runs_conceded}</td>
                                        <td>{player.wickets}</td>
                                        <td>{player.economy}</td>
                                        </tr>
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                    })}
                    
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                             Playing 11
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div className="accordion-body">
                                <div className ="col-lg-6 p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-dark">{homeTeam}</li>
                                        {homeTeamSheet.map((player, index) => {
                                            return(
                                                <li key={index} className="list-group-item">{player.player_name} ({player.position})</li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                                <div className ="col-lg-6 p-3">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-dark">{awayTeam}</li>
                                        {awayTeamSheet.map((player, index) => {
                                            return(
                                                <li key={index} className="list-group-item">{player.player_name} ({player.position})</li>
                                            )
                                        })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         </div>
    )
}