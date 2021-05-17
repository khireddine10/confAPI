exports.getAllConf = (req,res,next) => {
    res.status(200).json(
        {"message":"get all conferneces"}
    )
};
exports.getConf = (req,res,next) => {
    res.status(200).json(
        {"message": "get all informations about a conference"}
    )
};
exports.getUser = (req,res,next) => {
    res.status(200).json(
        {"message": "get all participants in conference"}
    )
};
exports.getUserShort = (req,res,next) => {
    res.status(200).json(
        {"message":"get short infos about a user"}
    )
};
exports.getUserAll = (req,res,next) => {
    res.status(200).json(
        {"message":"get all infos about user"}
    )
};
exports.getSessions = (req,res,next) => {
    res.status(200).json(
        {"message":"get all conf sessions"}
    )
};
exports.getSession = (req,res,next) => {
    res.status(200).json(
        {"message":" get all infos about session"}
    )
};
exports.getCommitees = (req,res,next) => {
    res.status(200).json(
        {"message":"get all conf commitees"}
    )
};
exports.getCommitee = (req,res,next) => {
    res.status(200).json(
        {"message":"get all infos commitee"}
    )
};