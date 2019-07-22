'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RegisterSchema extends Schema {
  up () {
    this.create('registers', (table) => {
      table.increments()
      table.string('number', 20).notNullable()
      table.string('first_name', 20).notNullable()
      table.string('last_name', 20).notNullable()
      table.string('birth_date', 20).notNullable()
      table.string('gender', 20).notNullable()
      table.string('email', 20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('registers')
  }
}

module.exports = RegisterSchema
