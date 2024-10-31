const express = require('express');
const app = express();
let {people} = require('./data');

app.use(express.static('./method-static'));

//to access what we get after form submission, and and the values to req.body
app.use(express.urlencoded({extended : false}));

//used for handling incoming json in request bodies
app.use(express.json());

app.get('/api/people' , (req , res) => {
    res.status(200).json({success : true , data : people});
})

app.post('/api/people' , (req , res) => {
    const {name} = req.body;
    if(!name){
        res.status(401).json({success : false , msg : "Please provide name"});
    }
    res.status(201).json({success : true , person : name});
})

app.post('/login', (req , res) => {
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    res.status(401).send('Please provide credentials');
})


app.put('/api/people/:id' , (req , res) => {
    //storing id from url
    const {id} = req.params;
    //storing nsme which we got in json format
    const {name} = req.body;
    //finding person with the id given in url
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        //if id does not exit return an error
        return res.status(404).json({success : false , msg : `No person with id ${id}`});
    }
    //creating a new array over people database while iterating
    const newPeople = people.map((person) => {
        //finding the person using id provided while iteration
        if(person.id === Number(id)){
            //UPDATING NAME
            person.name = name;
        }
        return person;
    })
    //returning the newArray with updated name
    res.status(201).json({success : true , data : newPeople});
})

app.delete('/api/people/:id' , (req , res) => {
    //here instaed of {id} destructuring we are using it directly like req.params.id everywhere
    const person = people.find((person) => person.id === Number(req.params.id));
    if(!person){
        return res.status(404).json({success : false , msg : `No person with id ${req.params.id}`});
    }
    //filter function deletes the person
    const newPeople = people.filter((person) =>  person.id !== Number(req.params.id) )
    return res.status(200).json({success : true , data : newPeople});
})


app.listen(3000 , () => {
    console.log("Listening on port 3000");
})