'use strict'

class StoreGig {
  get rules() {
    return {
      title: 'required|min:5',
      description: 'required|min:20'
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a gig title',
      'title.min': 'Gig title must be at least 5 characters',
      'description.required': 'Gig description is required',
      'description.min': 'Gig description must be at least 20 characters long'
    }
  }

  get validateAll() {
    return true
  }
}

module.exports = StoreGig
