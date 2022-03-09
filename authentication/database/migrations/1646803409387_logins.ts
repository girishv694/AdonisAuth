import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class LoginsSchema extends BaseSchema {
  protected tableName = 'logins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
       table.timestamps()

    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
