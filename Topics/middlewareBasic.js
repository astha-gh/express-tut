const express = require('express');
const app = express();

const logger = (req , res , next) => {
    const method = req.method;
    const time = new Date().getFullYear();
    const url = req.url;
    console.log(method , url , time);
    //Terminating
    //res.send("Terminating");
    //Passsing to next middleware
    next();
}

app.get('/' ,logger , (req , res) => {
    res.send("Home");
})

app.get('/about' ,logger , (req , res) => {
    res.send("About");
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})