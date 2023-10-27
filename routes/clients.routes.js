import { Router } from 'express'
import {
  getAllClientsController,
  createOneClientController,
  getOneClientByIDController,
  deleteOneClientByIDController
} from '../controllers/clients.controller.js'

import {createClienteValidator} from '../validators/clients.validators.js'

const clientsRouter = Router()

clientsRouter.route('/')
  .get(getAllClientsController)
  .post(createClienteValidator,createOneClientController)
clientsRouter.route('/:id')
  .get(getOneClientByIDController)
  .delete(deleteOneClientByIDController)

export default clientsRouter