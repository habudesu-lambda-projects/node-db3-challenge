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
  return db
  .select('scheme_name', 'step_number', 'instructions')
  .from('schemes')
  .join('steps', 'schemes.id', 'steps.scheme_id')
  .where('steps.scheme_id', '=', scheme_id)
  .orderBy('step_number', 'asc')
}

async function add(schemeData) {
  const [id] = await db('schemes').insert(schemeData)
  const newScheme = await db('schemes').where({id})
  return newScheme
}

function addStep(stepData, scheme_id) {
  return db('steps').insert({...stepData, scheme_id})
}

async function update(changes, id) {
  const updatedScheme = await db('schemes').where({id}).update(changes)
  return await db('schemes').where({id})
}

async function remove(id) {
  const scheme = await db('schemes').where({id}).first()
  await db('schemes').where({id}).del()
  return scheme
}
