const { Router} = require('express')
const Flat = require('../models/flat.modal')

const router = Router()

router.post('', async(req, res)=>{
    try {
        const flat = await Flat.create(req.body)
        return res
        .status(200)
        .send(flat)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message
        })
    }
})

router.get('', async (req, res)=>{
    try {
        const flats = await Flat.find().lean().exec()
        return res
        .status(200)
        .send(flats)
    } catch (error) {
        return res
        .status(500)
        .send({
            message : error.message
        })       
    }
})

// sorting 

module.exports = router