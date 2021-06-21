
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

    return fetch(`https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${date}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "98c597f677msh0740186b754d713p19ce9ejsn024a29b91081",
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
            "x-rapidapi-key": "98c597f677msh0740186b754d713p19ce9ejsn024a29b91081",
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