const { Router } = require('express')
const { check } = require('express-validator')
const { existsPetId } = require('../helpers/db_validators_pets')
const { validRequest } = require('../middlewares/valid_request')

const {
    petsGet, 
    petsPost,
    petsDelete,
    petsPatch
        } = require('../controllers/pets')

const router = Router();

router.get('/', petsGet)
router.post('/', petsPost)
router.delete('/:id', [
    check('id', 'Not is a MongoID valid').isMongoId(),
    check('id').custom(existsPetId),
    validRequest
], petsDelete)
router.patch('/:id', [
    check('id', 'Not is a MongoID valid').isMongoId(),
    check('id').custom(existsPetId),
    validRequest
], petsPatch)

module.exports = router;
