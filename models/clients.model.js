import { Schema, model } from 'mongoose'

const clientSchema = new Schema({
  names: { type: String, required:true },
  surnames: { type: String, required:true },
  rif: { type: String, required:true,unique:true },
  phone: { type: Number, required:true },
  address: { type: String, required:true },
  email: { type: String, required:true }
})

export default model('client', clientSchema)