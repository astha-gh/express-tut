const express = require('express');
const app = express();
const {products} = require('./data');


app.get('/' , (req , res) => {
    res.json(products);
});

app.listen(3000 , (req , res) => {
    console.log("Listening to port 3000");
})