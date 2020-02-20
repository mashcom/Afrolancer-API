'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateGigSchema extends Schema {
  up() {
    this.create('gigs', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.string('title', 255)
      table.string('status', 50)
      table.string('description', 500)
      table.timestamps()
    })
  }

  down() {
    this.drop('create_gigs')
  }
}

module.exports = CreateGigSchema
