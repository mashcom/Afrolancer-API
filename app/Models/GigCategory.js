'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GigCategory extends Model {

    category() {
        return this.hasOne('App/Models/Category', 'category_id', 'id')
    }
}

module.exports = GigCategory
