const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, {response, session}) {
    if (error.name === 'InvalidApiToken') {
      return response.status(401).send({
        message: 'Unauthorised request',
        details: 'invalid api token supplied'
      })
    }

    if (error.name === 'ValidationException') {
      return response.status(400).send({
        success:false,
        validation_error:true,
        errors:error.messages
      })
    }

    if (error.name === 'HttpException') {
      return response.status(404).send({
        success:false,
        message:"Resource not found!"
      })
    }

    return super.handle(...arguments)
  }
}

module.exports = ExceptionHandler
