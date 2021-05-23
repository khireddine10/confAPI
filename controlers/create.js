const confModel = require("../models/confirence");


exports.createConf = async (req,res,next) => {
    const data = req.body;
    try{
            const data = await confModel.create(data);
            res.status(200).json(
                {success:true, message:"conference is created", data: data }
            )
        }
    catch(err) { 
            res.status(400).json( 
                {success:false, message:err}
            )
    }
}
exports.createUser = (req,res,next) => {
    res.status(200).json(
        {success:true, message:"create a user"}
    )
}
exports.createSession = (req,res,next) => {
    res.status(200).json(
        {success:true, message:"create a session"}
    )
}
exports.createCommitee = (req,res,next) => {
    res.status(200).json(
        {success:true, message:"create a commitee"}
    )
}