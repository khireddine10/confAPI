exports.createConf = (req,res,next) => {
    res.status(200).json(
        {success:true, message:"create a conference"}
    )
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