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

async function find() {
    const schemes = await db('schemes')
    return schemes
  }
}

async function findById(id) {
  const scheme = await db('scheme').where({id}).first()
  if(scheme) {
    return scheme
  } else {
    return null
  }
}

function findSteps(scheme_id) {
  return db.select('scheme_name', 'step_number', 'instructions').from('schemes').where({scheme_id}).orderBy('step_number')
}

function add(schemeData) {
  return db('schemes').insert(schemeData)
})

function addStep(stepData, scheme_id) {
  return db('steps').insert({...stepData, scheme_id})
}

function update(changes, id) {
  return db('schemes').where({id}).update(changes)
}

function remove(id) {
  return db('schemes').where({id}).del()
}
