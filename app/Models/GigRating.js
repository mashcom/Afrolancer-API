'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GigRating extends Model {

    criteria() {
        return this.hasOne('App/Models/RatingCriterion', 'rating_criteria_id', 'id');
    }
}

module.exports = GigRating
