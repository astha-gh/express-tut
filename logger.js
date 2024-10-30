const logger = (req , res , next) => {
    const method = req.method;
    const time = new Date().getFullYear();
    const url = req.url;
    console.log("I am logger middleware")
    //console.log(method , url , time);
    //Terminating
    //res.send("Terminating");
    //Passsing to next middleware
    next();
}

module.exports = logger;