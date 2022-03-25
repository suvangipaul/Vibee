const express = require('express');
const dotenv = require('dotenv')
const PORT =  process.env.PORT | 4000
const app = express()
dotenv.config()
const router = require('./routes/routes')

app.use('/app', router)

app.get('/', (req, res) => {
    res.send('Server is running perfectly')
})


app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`)
})
