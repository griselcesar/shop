import { connect } from 'mongoose'
import { config } from 'dotenv'

import app from './server/index.js'

config()

connect(process.env.URI_DB)
.then(()=>{
  console.log('db connect successful 🚀')
  app.listen(process.env.PORT,()=>{
    console.log('Server listen on port: '+process.env.PORT)
  })
})
