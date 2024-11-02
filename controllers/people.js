const { people } = require('../data');

const getPerson = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(401).json({ success: false, msg: "Please provide name" });
    }
    res.status(201).json({ success: true, data : [...people, name] });
}

const updatePerson = (req, res) => {
    //storing id from url
    const { id } = req.params;
    //storing nsme which we got in json format
    const { name } = req.body;
    //finding person with the id given in url
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
        //if id does not exit return an error
        return res.status(404).json({ success: false, msg: `No person with id ${id}` });
    }
    //creating a new array over people database while iterating
    const newPeople = people.map((person) => {
        //finding the person using id provided while iteration
        if (person.id === Number(id)) {
            //UPDATING NAME
            person.name = name;
        }
        return person;
    })
    //returning the newArray with updated name
    res.status(201).json({ success: true, data: newPeople });
}

const deletePerson = (req, res) => {
    //here instaed of {id} destructuring we are using it directly like req.params.id everywhere
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` });
    }
    //filter function deletes the person
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople });
}

module.exports = {
    getPerson,
    createPerson,
    updatePerson,
    deletePerson,
}