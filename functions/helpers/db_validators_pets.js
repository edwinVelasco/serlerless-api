const Pet = require('../models/pet')


const existsPetId = async (id) => {
    const existsPet = await Pet.findById(id)
    if(!existsPet){
        throw new Error(`this id ${id}, not exists in the Pets.`);
    }
}

module.exports = { existsPetId }
