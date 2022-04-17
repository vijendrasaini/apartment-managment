const { Router} = require('express')
const Flat = require('../models/flat.modal')

const router = Router()

router.post('/flat', async(req, res)=>{
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

router.get('/flats', async (req, res)=>{
    try {
            
            const filter = {}
            let flats = await Flat.find().lean().exec()
            
            // flats = req?.query?.sort &&  req.query.sort == 1 
            if(req.query.q == 'sort'){
                flats = req.query.sort == 1 ? flats.sort((a,b)=>(a.no - b.no)) : flats.sort((a,b)=>(-a.no + b.no))
                // http://localhost:7000/flats?q=sort&sort=-1
            }
            else if(req.query.q == 'filter'){
                // const filterReason = req.query.base
                console.log({ query : req.query})
                flats = flats.filter(flat => flat.type == req.query.base)
            }

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