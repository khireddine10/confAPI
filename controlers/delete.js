exports.deleteAllConf = (req,res,next) => {
    res.status(200).json(
        {"message":"delete all conferneces"}
    )
};
exports.deleteConf = (req,res,next) => {
    res.status(200).json(
        {"message": "delete a conference"}
    )
};
exports.deleteUsers = (req,res,next) => {
    res.status(200).json(
        {"message": "delete all participants in conference"}
    )
};
exports.deleteUserShort = (req,res,next) => {
    res.status(200).json(
        {"message":"delete a user"}
    )
};
exports.deleteSessions = (req,res,next) => {
    res.status(200).json(
        {"message":"delete all conf sessions"}
    )
};
exports.deleteSession = (req,res,next) => {
    res.status(200).json(
        {"message":" delete a session"}
    )
};
exports.deleteCommitees = (req,res,next) => {
    res.status(200).json(
        {"message":"delete all conf commitees"}
    )
};
exports.deleteCommitee = (req,res,next) => {
    res.status(200).json(
        {"message":"delete a commitee"}
    )
};