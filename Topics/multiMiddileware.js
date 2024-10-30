const express = require('express');
const app = express();
const logger = require('./logger');
const authorise = require('./authorise');



app.use([authorise , logger]);


app.get('/' , (req , res) => {
    res.send("Home");
})

app.get('/about' , (req , res) => {
    res.send("About");
})

app.get('/api/products' , (req , res) => {
    res.send("Products");
})

app.get('/api/items', (req , res) => {
    res.send("Items");
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
}) 