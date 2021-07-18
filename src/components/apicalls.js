
export const getMatches = () => {
    var myCurrentDate = new Date();
    var month
    var currentDate
    if ((myCurrentDate.getMonth()+1)<10) {
       month = '0'+(myCurrentDate.getMonth()+1);
    }
    else{
        month = (myCurrentDate.getMonth()+1);
    }
    if ((myCurrentDate.getDate())<10) {
        currentDate = '0'+(myCurrentDate.getDate());
     }
     else{
         currentDate = (myCurrentDate.getDate());
     }
    var date = myCurrentDate.getFullYear() + '-' + month + '-' + currentDate
    console.log(date);
    return fetch(`https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-07-17`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c79c4e3060msha638ece42a95644p1d2a8fjsn0168a20222d4",
		    "x-rapidapi-host": "cricket-live-data.p.rapidapi.com"
        }
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
}

export const getMatchScore = (matchID) => {
    return fetch(`https://cricket-live-data.p.rapidapi.com/match/${matchID}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c79c4e3060msha638ece42a95644p1d2a8fjsn0168a20222d4",
		    "x-rapidapi-host": "cricket-live-data.p.rapidapi.com"
        }
    })
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .catch(err => {
        console.error(err);
    });
}