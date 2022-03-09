import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Trainers extends BaseSchema {
  protected tableName = 'trainers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.string('name',100)
      table.integer('phone_number',100)
      table.string('mail_id',100)
      table.integer('emergency_contact_number',100)
      table.string('emergency_contact_name',100)
      table.string('DOB',100)
      table.string('addressLine1',100)
      table.string('addressLine2',100)
      table.string('city',100)
      table.string('state',100)
      table.integer('pincode',100)
      table.json('documents')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
