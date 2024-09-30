const express = require('express');
const app = express();

const path = require('path');

//used to serve static files in navbar as a middleware function in express app
app.use(express.static('./navbar'));

app.get('/' , (req , res) => {
    res.sendFile(path.resolve(__dirname, './navbar/index.html'));
});

app.all('*' , (req , res) => {
    res.status(404).send("Not Found");
})

app.listen(3000 , () => {
    console.log("Listening to port 3000");
})