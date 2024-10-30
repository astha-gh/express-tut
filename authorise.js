const authorise = (req , res , next) => {
    const {user} = req.query;
    if(user === 'john'){
        req.user = {name : 'john' , id : 3};
    }
    else{
        res.status(401).send("Unauthorised");
    }
    console.log("I am authorise middleware")
    next();
}

module.exports = authorise;