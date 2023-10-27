import {
  getAllClients,
  createOneClient,
  getOneClientByID,
  deleteOneClientByID,
  updateOneClientByID
} from '../services/clients.services.js'

export const getAllClientsController = async (req, res) => {
  let clients = await getAllClients()
  return res.status(200).json({
    message: 'clientes cargados',
    count: clients.length,
    clients: clients.map(client => ({
      id: client._id,
      client: `${client.surnames}, ${client.names}`,
      rif: client.rif,
      address: client.address,
      phone: client.phone,
      email: client.email
    }))
  })
}

export const getOneClientByIDController = async (req, res) => {
  let { id } = req.params
  let client = await getOneClientByID(id)
  if (!client) return res.status(404).json({ message: 'cliente no encontrado' })
  return res.status(200).json({
    message: 'datos del cliente',
    client: {
      id: client._id,
      client: `${client.surnames}, ${client.names}`,
      rif: client.rif,
      address: client.address,
      phone: client.phone,
      email: client.email
    }
  })
}

export const createOneClientController = async (req, res) => {
  let { newClient } = req
  let client = await createOneClient(newClient)
  return res.status(201).json({
    message: 'cliente creado correctamente',
    client: {
      id: client._id,
      client: `${client.surnames}, ${client.names}`,
      rif: client.rif,
      address: client.address,
      phone: client.phone,
      email: client.email
    }
  })
}

export const deleteOneClientByIDController = async (req, res) => {
  let { id } = req.params
  let client = await deleteOneClientByID(id)
  if (!client) return res.status(404).json({ message: 'cliente no encontrado' })
  return res.status(200).json({ message: 'cliente eliminado' })
}

export const updateOneClientByIDController = async (req, res) => {
  let { id } = req.params
  let { newClientData } = req
  let client = await updateOneClientByID(id, newClientData)
  if (!client) return res.status(404).json({ message: 'cliente no encontrado' })
  return res.status(200).json({
    message: 'cliente actualizado correctamente',
    client: {
      id: client._id,
      client: `${client.surnames}, ${client.names}`,
      rif: client.rif,
      address: client.address,
      phone: client.phone,
      email: client.email
    }
  })
}