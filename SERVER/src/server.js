const express = require('express')

const mongoConnector = require('./configs/database')
const app = express()
const port = process.env.PORT || 7000

module.exports = ()=>{
    app.listen(port, async ()=>{
        try {
            await mongoConnector()
            console.log(`Server is listening on the port ${port} ...`)    
        } catch (error) {
            console.log({
                message : error.message,
                status : "something bad happened"
            })
        }
    } )
}