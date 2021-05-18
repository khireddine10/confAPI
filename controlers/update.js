exports.updateConf = (req,res,next) => {
    res.status(200).json(
        {"message": "update  conference"}
    )
};
exports.updateUserShort = (req,res,next) => {
    res.status(200).json(
        {"message":"update user"}
    )
};
exports.updateSession = (req,res,next) => {
    res.status(200).json(
        {"message":"update session"}
    )
};
exports.updateCommitee = (req,res,next) => {
    res.status(200).json(
        {"message":"update commitee"}
    )
};