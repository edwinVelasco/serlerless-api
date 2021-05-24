const { Schema, model } = require('mongoose')

const PetSchema = Schema({
    name: {
        type: String,
        require: [true, 'Name is required']
    },
    type: {
        type: String,
        require: [true, 'Type is required']
    },
    description: {
        type: String,
        require: [true, 'Description is required']
    }
})

module.exports = model('Pet', PetSchema)