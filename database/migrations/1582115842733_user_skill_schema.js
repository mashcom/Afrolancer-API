'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSkillSchema extends Schema {
  up () {
    this.create('user_skills', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_skills')
  }
}

module.exports = UserSkillSchema
