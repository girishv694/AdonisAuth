import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Trainer extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name : string

  @column()
  public phone_number : number

  @column()
  public mail_id : string

  @column()
  public emergency_contact_number  :number

  @column()
  public emergency_contact_name  :number

  @column()
  public DOB : string

  @column()
  public addressLine1  :string

  @column()
  public addressLine2 : string

  @column()
  public city  : string

  @column()
  public state : string

  @column()
  public pincode : number

  @column()
  public documents : string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
