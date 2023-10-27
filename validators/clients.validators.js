import { getClientByRIF } from '../services/clients.services.js'

export const createClienteValidator = async (req, res, next) => {
  let { rif, names, surnames, address, email, phone } = req.body
  if (!rif) return res.status(400).json({ message: 'ingrese un RIF por favor' })
  if (!names) return res.status(400).json({ message: 'ingrese un nombre por favor' })
  if (!surnames) return res.status(400).json({ message: 'ingrese un apellido por favor' })
  if (!address) return res.status(400).json({ message: 'ingrese una dirección por favor' })
  if (!email) return res.status(400).json({ message: 'ingrese un correo por favor' })
  if (!phone) return res.status(400).json({ message: 'ingrese un teléfono por favor' })

  if (rif) {
    let client = await getClientByRIF(rif)
    if (client) return res.status(400).json({ message: 'el RIF ya se encuentra registrado' })
  }

  req.newClient = { rif, names, surnames, address, email, phone }
  next()
}