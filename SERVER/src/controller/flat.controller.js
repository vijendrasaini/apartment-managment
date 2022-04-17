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
            const page = req.query.page || 1
            const limit = req.query.limit || 2
            let flats = await Flat.find().skip((page - 1) * limit).limit(limit).lean().exec()
            const totalDocs = await Flat.find().countDocuments()
            const totolPages = (Math.ceil(totalDocs/limit))
            if(req.query.q){
                if(req.query.q == 'sort'){
                    flats = req.query.sort == 1 ? flats.sort((a,b)=>(a.no - b.no)) : flats.sort((a,b)=>(-a.no + b.no))
                    // http://localhost:7000/flats?q=sort&sort=-1
                }
                else if(req.query.q == 'filter'){
                    flats = flats.filter(flat => flat.type == req.query.base)
                    // http://localhost:7000/flats?q=filter&base=owner
                }
                else if(req.query.q == "search"){
                    flats = flats.filter(flat => flat.block == req.query.block)
                    // http://localhost:7000/flats?q=search&block=B
                }
            }

            return res
            .status(200)
            .send({ flats, totolPages})
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