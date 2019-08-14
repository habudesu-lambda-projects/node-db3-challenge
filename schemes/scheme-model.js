const db = require('../data/db-config.js')

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
}

function find() {
  const schemes = db('schemes')
  return schemes
}

function findById(id) {
  const scheme = db('schemes').where({id}).first()
  return scheme
}

function findSteps(scheme_id) {
  return db.select('scheme_name', 'step_number', 'instructions').from('schemes').where({scheme_id}).orderBy('step_number')
}

function add(schemeData) {
  return db('schemes').insert(schemeData)
}

function addStep(stepData, scheme_id) {
  return db('steps').insert({...stepData, scheme_id})
}

function update(changes, id) {
  return db('schemes').where({id}).update(changes)
}

function remove(id) {
  return db('schemes').where({id}).del()
}
