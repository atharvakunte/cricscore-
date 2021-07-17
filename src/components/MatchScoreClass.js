import React, { Component } from 'react'
import { getMatchScore } from "./apicalls";
import { Scorecard } from './Scorecard';
import { Accordion } from './Accordion';

export  class MatchScoreClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          match: {}
        };
    }

    componentDidMount() {
         let matchId = this.props.match.params.matchId
        getMatchScore(matchId).then((data) => {
            this.setState({
                isLoaded : true,
                match : data.results
            });
        }, 
        (error)=> {
            this.setState({
                isLoaded : true,
                error: error
            });
        })
    }


    render() {
        const {error, isLoaded, match} = this.state;

        if (error) {
            return(
                console.log(error)
            )
        } else if(!isLoaded){
            return(
                <div className="d-flex justify-content-center mt-5">
                    <div className="spinner-grow text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) 
        }else{
            return(
                <div>
                    <Scorecard data = {match}/> 
                    <Accordion data = {match}/>
                </div>
            )
        }
        
    }
}
