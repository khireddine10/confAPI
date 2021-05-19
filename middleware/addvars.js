const addSomeVars = (req,res,next)=> {
    res.newVar = "API TOKEN";
    console.log("run the middleware")
    next();
}

module.exports = addSomeVars;