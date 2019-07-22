'use strict'
const Register = use('App/Models/Register')
const Logger = use('Logger')

class AuthController {
  async register({request, response}) {
    if(request.input('number') == null || request.input('firstName') == null || request.input('lastName') == null || request.input('email') == null){
      return response.status(400).send({message: "parameter not complete"})
    }
    let number = request.input('number')
    let fistName = request.input('firstName')
    let lastName = request.input('lastName')
    let birthDate = request.input('birthDate')
    let gender = request.input('gender')
    if (birthDate == null || birthDate == undefined) {
      birthDate = ""
    }
    if (request.input('gender') == null || request.input('gender') == undefined) {
       gender = ""
    }
    const email = request.input('email')
    try {
      const register = new Register()
      register.number = number
      register.first_name = fistName
      register.last_name = lastName
      register.birth_date = birthDate
      register.gender = gender
      register.email = email
      await register.save()
      return response.send({message: "success", data: register})
    } catch (e) {
      Logger.error(e)
      return response.status(400).send({message: "failed"})
    }
  }

}

module.exports = AuthController
