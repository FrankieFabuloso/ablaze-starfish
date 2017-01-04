const fs = require('fs')

if(fs.existsSync('.env')) {
  require('dotenv').config()
}

const coneectionString = process.env.DATABASE_URL

const pgp = require('pg-promise')()

const db = pgp(connectionString)
