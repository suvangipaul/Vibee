const express = require('express');
const dotenv = require('dotenv')
const { PrismaClient } = require('@prisma/client')
// app config
const PORT =  process.env.PORT || 4000
const prisma = new PrismaClient()
const app = express()
dotenv.config()
const router = require('./routes/routes.js')
const cors = require('cors')

// middleware
app.use(express.json()) //! important, never ever forget it, otherwise it won't give json response
app.use(cors())


// orm connection / database connection
const databaseConnection = async () => {
    await prisma.$connect()
    console.log('Prisma Connected')
}
databaseConnection()
.catch((e) =>{
    throw e
})
.finally(async () => {
    await prisma.$disconnect()
})

// routes
app.use('/app', router)
app.get('/', (req, res) => {
    res.send('Server is running perfectly')
})


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})
