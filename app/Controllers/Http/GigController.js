'use strict'


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gigs
 */

const Gig = use("App/Models/Gig");
const { validate } = use('Validator')
const { validateAll } = use('Validator')

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
  async index({ auth, request, response, view }) {
    const gigs = await Gig.query()
      .with('categories.category')
      .with('packages')
      .with('images')
      .with('user')
      .fetch();
    return { success: true, data: gigs };

  }


  /**
   * Create/save a new gig.
   * POST gigs
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const gig = new Gig();
    gig.title = request.post().title;
    gig.description = request.post().description;
    gig.user_id = auth.user.id;
    gig.status = 1;
    if (gig.save()) {
      return { success: true, data: gig }
    }
    return { success: false }
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
  async show({ auth, params, request, response, view }) {
    const gig = await Gig.query()
      .where('id', params.id)
      .with('categories.category')
      .with('packages')
      .with('images')
      .with('user')
      .with('user.skills')
      .with('ratings.criteria')
      .with('requirements')
      .firstOrFail();

    gig.is_owner = false;
    if (auth.user.id == gig.user_id) {
      gig.is_owner = true;
    }


    return { success: true, data: gig };
  }

  /**
   * Update gig details.
   * PUT or PATCH gigs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ auth, params, request, response }) {
    const gig = await Gig.findOrFail(params.id);
    if (auth.user.id != gig.user_id) {
      return response.status(403).send({ message: 'You cannot edit a gig which is not yours' })
    }
    gig.title = request.post().title;
    gig.description = request.post().description;
    if (gig.save()) {
      return { success: true, data: gig }
    }
    return { success: false }
  }

  /**
   * Delete a gig with id.
   * DELETE gigs/:id
   * @todo Implement delete functionality
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ auth, params, request, response }) {
    const gig = await Gig.find(params.id);
    if (auth.user.id != gig.user_id) {
      return response.status(403).send({ message: 'You cannot delete a gig which is not yours' })
    }
  }
}

module.exports = GigController
