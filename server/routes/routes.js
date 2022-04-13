const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
// const Model = require('../model/schema.js')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// config 
dotenv.config()

router.get('/get/keys',(req, res) => {
    res.json([{
        "domain": process.env.DOMAIN,
        "clientId": process.env.CLIENTID,
        "audience": process.env.AUDIENCE
    }])
})


router.get('/get/rooms', async (req, res) => {
    const data = await prisma.rooms.findMany({})
    res.status(200).send(data)
})


router.post('/add', async (req, res) => {
    const { Room_name, members_needed, thumbnail, location, mode, createdBy } = req.body
    const data = await prisma.rooms.create({
        data: {
            Room_name: Room_name,
            members_needed: members_needed,
            thumbnail: thumbnail,
            location: location,
            mode: mode,
            createdBy: createdBy
        }
    }).catch(err => console.error(err))
    res.status(201).send(data)
})

router.delete('/:id', async (req, res) => {
    const { id } = req.params
    const room = await prisma.rooms.delete({
        where: {
            id,
        }
    })
    res.send(room)
})


router.get('/get/:id', async (req, res) => {
    const { id } = req.params
    const data = await prisma.rooms.findMany({
        where: {
            id,
        }
    })
    res.status(200).send(data)
})

module.exports = router