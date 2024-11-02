const express = require('express');
const router = express.Router();
let {people} = require('../data');

router.post('/', (req , res) => {
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
})

module.exports = router;

//here in the paths i have removed /login from all of the route because routerApp uses this path as middleware
