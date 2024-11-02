const express = require('express');
const app = express();
let {people} = require('./data');
const peopleR = require('./router/people')
const auth = require('./router/auth');

app.use(express.static('./method-static'));

//to access what we get after form submission, and and the values to req.body
app.use(express.urlencoded({extended : false}));

//used for handling incoming json in request bodies
app.use(express.json());

app.use('/api/people', peopleR)
app.use('/login', auth)

app.listen(3000 , () => {
    console.log("Listening on port 3000");
})