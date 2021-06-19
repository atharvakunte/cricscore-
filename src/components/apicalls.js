
export const getMatches = () => {
    var myCurrentDate = new Date();
    var month
    if ((myCurrentDate.getMonth()+1)<10) {
       month = '0'+(myCurrentDate.getMonth()+1);
    }
    else{
        month = (myCurrentDate.getMonth()+1);
    }
    var date = myCurrentDate.getFullYear() + '-' + month + '-' + myCurrentDate.getDate()

    return fetch(`https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2021-06-16`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bcf7f185f6mshccbbeb13565b63bp1d1864jsnfe9471784122",
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
            "x-rapidapi-key": "bcf7f185f6mshccbbeb13565b63bp1d1864jsnfe9471784122",
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