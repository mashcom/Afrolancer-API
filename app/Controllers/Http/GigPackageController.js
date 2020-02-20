'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gigpackages
 */

const GigPackage = use("App/Models/GigPackage")

class GigPackageController {
  /**
   * Show a list of all gigpackages.
   * GET gigpackages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
  }

  /**
   * Render a form to be used for creating a new gigpackage.
   * GET gigpackages/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
  }

  /**
   * Create/save a new gigpackage.
   * POST gigpackages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const gig_package = new GigPackage();
    gig_package.gig_id = request.post().gig_id;
    gig_package.name = request.post().name;
    gig_package.description = request.post().description;
    gig_package.price = request.post().price;
    gig_package.duration = request.post().duration;
    return gig_package.save();

  }

  /**
   * Display a single gigpackage.
   * GET gigpackages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
  }

  /**
   * Render a form to update an existing gigpackage.
   * GET gigpackages/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
  }

  /**
   * Update gigpackage details.
   * PUT or PATCH gigpackages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
  }

  /**
   * Delete a gigpackage with id.
   * DELETE gigpackages/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response}) {
  }
}

module.exports = GigPackageController
