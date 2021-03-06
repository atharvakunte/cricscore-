require('dotenv').config();

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
    
    return fetch(`https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${date}`, {
        "method": "GET",
        "headers": {
            'x-rapidapi-key': process.env.REACT_APP_API_KEY_1,
            'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
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
            'x-rapidapi-key': process.env.REACT_APP_API_KEY_2,
            'x-rapidapi-host': 'cricket-live-data.p.rapidapi.com'
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