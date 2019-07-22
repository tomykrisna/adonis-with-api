'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Register extends Model {
  static get table() {
    return 'registers'
  }
}

module.exports = Register
