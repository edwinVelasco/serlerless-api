const Pet = require('../models/pet')

const petsGet = async (req, res) => {
    const { page=1, limit=10 } = req.query
    const [total, pets] = await Promise.all([
        Pet.countDocuments({}),
        Pet.find({}).skip(
            (Number(page)-1)*Number(limit)).limit(Number(limit))
    ])
    res.status(200).json({
        total,
        pets
    })
}

const petsPost = async (req, res) => {
    const { name, type, description } = req.body
    const pet = new Pet({
        name,
        type,
        description
    })
    await pet.save()
    res.status(200).json({
        msg: 'created',
        pet
    })
}

const petsDelete = async (req, res) => {
    
    const { id } = req.params
    await Pet.deleteOne({_id: id})

    res.status(201).json({
        msg: 'Pet successfully removed'
    })
}

const petsPatch = async (req, res) => {
    const { id } = req.params
    const { _id, ...others } = req.body

    const pet = await Company.findByIdAndUpdate(id, others)

    res.status(204).json(
        {
            pet
        }
    )
}


module.exports = { petsGet, petsPost, petsDelete, petsPatch }