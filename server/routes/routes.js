const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
dotenv.config()
router.get('/api',(req, res) => {
    res.json([{
        "domain": process.env.DOMAIN,
        "clientId": process.env.CLIENTID,
        "audience": process.env.AUDIENCE
    }])
})


module.exports = router