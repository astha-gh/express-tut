const express = require('express');
const router = express.Router();
let {people} = require('../data');
const {getPerson , createPerson , updatePerson , deletePerson} = require('../controllers/people');

// router.get('/' , getPerson)

// router.post('/' , createPerson)

// router.put('/:id' , updatePerson)

// router.delete('/:id' , deletePerson)

router.route('/').get(getPerson).post(createPerson);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;

//here in the paths i have removed /api/people from all of the route because routerApp uses this path as middleware
