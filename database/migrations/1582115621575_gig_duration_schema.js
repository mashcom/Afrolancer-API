'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GigDurationSchema extends Schema {
  up() {
    this.create('gig_durations', (table) => {
      table.increments()
      table.integer('gig_id').unsigned().references('id').inTable('gigs')
      table.string('duration');
      table.timestamps()
    })
  }

  down() {
    this.drop('gig_durations')
  }
}

module.exports = GigDurationSchema
