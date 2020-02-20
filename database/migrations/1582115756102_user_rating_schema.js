'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserRatingSchema extends Schema {
  up () {
    this.create('user_ratings', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_ratings')
  }
}

module.exports = UserRatingSchema
