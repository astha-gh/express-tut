const express = require('express');
const app = express();
let {people} = require('./data');



app.listen(3000 , () => {
    console.log("Listening on port 3000");
})