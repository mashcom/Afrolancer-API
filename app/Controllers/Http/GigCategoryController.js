'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with gigcategories
 */

const GigCategory = use('App/Models/GigCategory')

class GigCategoryController {

  /**
   * Show a list of all gigcategories.
   * GET gigcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new gigcategory.
   * GET gigcategories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new gigcategory.
   * POST gigcategories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const gig_category = new GigCategory();
    gig_category.gig_id = request.post().gig_id;
    gig_category.category_id = request.post().category_id;
    if (gig_category.save()) {
      return { success: true, data: gig_category }
    }
    return { success: false }
  }

  /**
   * Display a single gigcategory.
   * GET gigcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    return await GigCategory.find(params.id);
  }

  /**
   * Render a form to update an existing gigcategory.
   * GET gigcategories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update gigcategory details.
   * PUT or PATCH gigcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a gigcategory with id.
   * DELETE gigcategories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = params
    const gig_category = await GigCategory.find(id);
    return gig_category.delete();
  }
}

module.exports = GigCategoryController
