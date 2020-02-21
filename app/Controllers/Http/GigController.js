'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gigs
 */

const Gig = use("App/Models/Gig");

class GigController {
  /**
   * Show a list of all gigs.
   * GET gigs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return await Gig.query()
      .with('gig_categories.categories')
      .with('packages')
      .with('images')
      .with('user')
      .fetch();
  }

  /**
   * Render a form to be used for creating a new gig.
   * GET gigs/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {

  }

  /**
   * Create/save a new gig.
   * POST gigs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

    const gig = new Gig();
    gig.title = request.post().title;
    gig.description = request.post().description;
    gig.user_id = 1;//auth.user.id;
    gig.status = 1;
    return gig.save();
  }

  /**
   * Display a single gig.
   * GET gigs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const gig = await Gig.query()
      .where('id', params.id)
      .with('gig_categories.categories')
      .with('packages')
      .with('images')
      .with('user')
      .with('user.skills')
      .with('ratings.criteria')
      .with('requirements')
      .first();

    // if (auth.user.id = gig.user_id) {
    gig.is_owner = true;


    return await gig;
  }

  /**
   * Render a form to update an existing gig.
   * GET gigs/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update gig details.
   * PUT or PATCH gigs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a gig with id.
   * DELETE gigs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = GigController
