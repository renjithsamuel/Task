const mongoose = require('mongoose');

const simpleRegistersSchema = mongoose.Schema({
    username : {type :String},
    password : {type : String},
    dob : {type : Date},
    emailId : {type : String}
})

module.exports = mongoose.model('simpleRegisters',simpleRegistersSchema)