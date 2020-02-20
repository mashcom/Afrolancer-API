'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GigPriceSchema extends Schema {
  up() {
    this.create('gig_packages', (table) => {
      table.increments()
      table.integer('gig_id').unsigned().references('id').inTable('gigs')
      table.string('name', 50)
      table.text('description')
      table.double('price', 2)
      table.text('duration')
      table.timestamps()
    })
  }

  down() {
    this.drop('gig_packages')
  }
}

module.exports = GigPriceSchema
