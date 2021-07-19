import React from 'react';

export const Accordion = ({data}) => {

  

const stats = data.live_details&&data.live_details.stats?data.live_details.stats:"";
const scorecard = data.live_details?data.live_details.scorecard:[];
const homeTeam = data.fixture.home.name?data.fixture.home.name:"";
const awayTeam = data.fixture.away.name?data.fixture.away.name:"";
const homeTeamSheet = data.live_details?data.live_details.teamsheets.home:[];
const awayTeamSheet = data.live_details?data.live_details.teamsheets.away:[];

// console.log(data.live_details.teamsheets.home);
    if (data.live_details === null) {
        return(
            <div>

            </div>
        )
    } else {
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
                            const getNum = (index) =>{
                                if (index === 0) {
                                    return('Two')
                                } else if(index === 1) {
                                    return('Three')
                                }else if(index === 2) {
                                    return('Four')
                                }else if(index === 3) {
                                    return('Five')
                                }
                            }
                            return(
                                <div key ={index} className="accordion-item">
                            <h2 className="accordion-header" id={"panelsStayOpen-heading"+getNum(index)}>
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#panelsStayOpen-collapse"+getNum(index)} aria-expanded="false" aria-controls={"panelsStayOpen-collapse"+getNum(index)}>
                                 Innings {index+1} Scorecard
                                </button>
                            </h2>
                            <div id={"panelsStayOpen-collapse"+getNum(index)} className="accordion-collapse collapse" aria-labelledby={"panelsStayOpen-heading"+getNum(index)}>
                                <div className="accordion-body">
                                    <h5>Batting</h5>
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
                                            return(
                                                <tr key={index}>
                                                <td>{player.player_name}</td>
                                                <td>{player.how_out}</td>
                                                <td>{player.runs}</td>
                                                <td>{player.balls}</td>
                                                <td>{player.fours}</td>
                                                <td>{player.sixes}</td>
                                                <td>{player.strike_rate}</td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                    <br/>
                                    <h5>Yet to bat</h5>
                                    <table className="table table-borderless">
                                        {card.still_to_bat.map((player, index) => {
                                            return(
                                                <tr key={index}>
                                                <td>{player.player_name}</td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                    <br/>
                                    <h5>Bowling</h5>
                                    <table className="table table-borderless">
                                        <tr>
                                            <th scope="col">Player</th>
                                            <th scope="col">Overs</th>
                                            <th scope="col">Maidens</th>
                                            <th scope="col">Runs</th>
                                            <th scope="col">Wickets</th>
                                            <th scope="col">Economy</th>
                                        </tr>
                                        {card.bowling.map((player, index) => {
                                            return(
                                                <tr key={index}>
                                                <td>{player.player_name}</td>
                                                <td>{player.overs}</td>
                                                <td>{player.maidens}</td>
                                                <td>{player.runs_conceded}</td>
                                                <td>{player.wickets}</td>
                                                <td>{player.economy}</td>
                                                </tr>
                                            )
                                        })}
                                    </table>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                 Playing 11
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
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
}