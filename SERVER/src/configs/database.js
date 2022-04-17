const mongoose = require('mongoose')
const mongoDB = "mongodb://localhost:27017/apartmentManagement"

module.exports = ()=>mongoose.connect(mongoDB)