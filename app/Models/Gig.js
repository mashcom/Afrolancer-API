'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Gig extends Model {

    categories() {
        return this.hasMany('App/Models/GigCategory')
    }

    packages() {
        return this.hasMany('App/Models/GigPackage', 'id', 'gig_id');
    }

    images() {
        return this.hasMany('App/Models/GigImage', 'id', 'gig_id');
    }

    user() {
        return this.hasOne('App/Models/User', 'user_id', 'id');
    }

    ratings() {
        return this.hasMany('App/Models/GigRating', 'id', 'gig_id');
    }
    requirements() {
        return this.hasMany('App/Models/GigRequirement', 'id', 'gig_id');
    }
}

module.exports = Gig
