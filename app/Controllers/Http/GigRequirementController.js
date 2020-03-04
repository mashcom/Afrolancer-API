'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gigrequirements
 */
const Gig = use("App/Models/Gig");
const GigRequirement = use("App/Models/GigRequirement");
const { validate } = use('Validator')
const { validateAll } = use('Validator')

class GigRequirementController {
  /**
   * Show a list of all gigrequirements.
   * GET gigrequirements
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
  }


  /**
   * Create/save a new gigrequirement.
   * POST gigrequirements
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ auth, request, response }) {
      const gig_requirement = new GigRequirement();
      gig_requirement.gig_id = request.post().gig_id;
      gig_requirement.requirement = request.post().requirement;

      const gig_details = await Gig.query()
        .where('id', request.post().gig_id)
        .where('user_id',auth.user.id)
        .with('user')
        .firstOrFail();

      if(gig_requirement.save()){
        return {success:true,data:gig_requirement};
      }
      return  {success:false}
  }

  /**
   * Display a single gigrequirement.
   * GET gigrequirements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Update gigrequirement details.
   * PUT or PATCH gigrequirements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ auth, params, request, response }) {
    const gig_requirement = await GigRequirement.findOrFail(params.id);
    gig_requirement.gig_id = request.post().gig_id;
    gig_requirement.requirement = request.post().requirement;

    const gig_details = await Gig.query()
      .where('id', gig_requirement.gig_id)
      .where('user_id',auth.user.id)
      .with('user')
      .firstOrFail();

    if(gig_requirement.save()){
      return {success:true,data:gig_requirement};
    }
    return  {success:false}
  }

  /**
   * Delete a gigrequirement with id.
   * DELETE gigrequirements/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = GigRequirementController
