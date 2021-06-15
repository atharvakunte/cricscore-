import {API} from "../backend"

export const getUpcomingMatches = () => {
    return fetch(`${API}/matches`, {
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
            "apikey": "FUDw5fxI2sMIOsiy2ICkqlBJyLx2"
        }
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
}

export const getMatchScore = (matchID) => {
    return fetch(`${API}/matches`, {
        method:'POST',
        headers:{
            Accept:"application/json",
            "Content-Type": "application/json",
            "unique_id": `${matchID}`,
            "apikey": "FUDw5fxI2sMIOsiy2ICkqlBJyLx2"
        }
    })
    .then(response =>{
        return response.json();
    })
    .catch(err => console.log(err))
}