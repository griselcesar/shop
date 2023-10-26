import clientsModel from '../models/clients.model.js'

export const getClientByRIF = async (rif) => {
  let client = await clientsModel.findOne({ rif });
  return client
}

export const getAllClients = async () => {
  let clients = await clientsModel.find()
  return clients
}

export const getOneClientByID = async (id) => {
  let client = await clientsModel.findById(id)
  return client
}

export const createOneClient = async (newClient) => {
  let client = await clientsModel.create(newClient)
  return client
}

export const deleteOneClientByID = async (id) => {
  let client = clientsModel.findByIdAndDelete(id)
  return client
}

export const updateOneClientByID = async (id,newClientData) => {
  let client = await clientsModel.findByIdAndUpdate(id,newClientData,{new:true})
  return client
}