'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GigCategorySchema extends Schema {
  up() {
    this.create('gig_categories', (table) => {
      table.increments()
      table.integer('gig_id').unsigned().references('id').inTable('gigs')
      table.integer('category_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('gig_categories')
  }
}

module.exports = GigCategorySchema
