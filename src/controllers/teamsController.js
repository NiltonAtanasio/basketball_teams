/* import teams from '../model/teams.json' assert { type: 'json' }; */

const getHome = (req, res) => {
  try {
    res.status(200).send([{"message": "Home"}])
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const getAll = (req, res) => {
  try {
    res.status(200).send(teams)
    
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
const getOne = (req, res) => {
  try {
    let reqName = req.body.name
    let teamFound = teams.find((team) => {
      return team.teamName === reqName
    })
      
    if(teamFound){
     res.status(200).send(teamFound)
    }else {
      res.status(400).json({
        message: "digite corretamente o nome do time",
        reqName
      })
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}
export default {
  getHome,
  getAll, 
  getOne,
}