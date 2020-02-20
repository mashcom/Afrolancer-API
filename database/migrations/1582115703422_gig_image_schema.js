'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GigImageSchema extends Schema {
  up() {
    this.create('gig_images', (table) => {
      table.increments()
      table.integer('gig_id').unsigned().references('id').inTable('gigs')
      table.string("type", 100)
      table.string("url")
      table.timestamps()
    })
  }

  down() {
    this.drop('gig_images')
  }
}

module.exports = GigImageSchema
