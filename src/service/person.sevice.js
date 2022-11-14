import Person from '../model/person.js'

const findAllPerson = () => Person.find()

const createService = (body) => Person.create(body) 

export default {
  findAllPerson,
  createService,
}