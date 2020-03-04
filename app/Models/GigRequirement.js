'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GigRequirement extends Model {

  gig(){
    return this.belongsTo('App/Models/Gig');
  }
}

module.exports = GigRequirement
