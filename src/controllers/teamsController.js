const teams = require('../model/teams.json');
//const fetch = require('node-fetch');
const axios = require('axios');

const getHome = (req, res) => {
  res.status(200).send([{"message": "Home"}])
}
const getAll = (req, res) => {
  res.status(200).send([{"message": teams}])
}
const createTeam = (req, res) => {
 
  let reqTeamName = req.body.teamName;
  let reqUserName = req.body.userName;
  
  if(reqTeamName && reqUserName){
    let newTeam = {
      "id": Math.random().toString(32).substring(2),
      "addedAt": new Date(),
      "teamName": reqTeamName,
      "userName": reqUserName
    };

    teams.push(newTeam);

    res.status(200).send([{"message": "New team added",
    newTeam
    }]);
  }
}
const getMovies = async (req, res) => {
  try {
    let url = 'https://ghibliapi.herokuapp.com/films'
   
    let requestedMovies = await axios.get(url)
   
    res.status(200).send(requestedMovies.data)
  } catch(error) {
    console.error(error)
  }
}
module.exports = {
  getHome,
  getAll,
  createTeam,
  getMovies,

}