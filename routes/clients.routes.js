import { Router } from 'express'
import {
  getAllClientsController,
  createOneClientController,
  getOneClientByIDController,
  deleteOneClientByIDController,
  updateOneClientByIDController
} from '../controllers/clients.controller.js'

import { createClienteValidator, updateClientValidator } from '../validators/clients.validators.js'

const clientsRouter = Router()

clientsRouter.route('/')
  .get(getAllClientsController)
  .post(createClienteValidator, createOneClientController)
clientsRouter.route('/:id')
  .get(getOneClientByIDController)
  .put(updateClientValidator, updateOneClientByIDController)
  .delete(deleteOneClientByIDController)

export default clientsRouter