const confModel = require("../models/confirence")


exports.deleteAllConf = (req,res,next) => {
    res.status(200).json(
        {"message":"delete all conferneces"}
    )
};

exports.deleteConf = async (req,res,next) => {
    try {
        const id = req.params.confid;
        const data = await confModel.findByIdAndDelete(id);
        if (!data){
            res.status(400).json(
                {"success": false, "message": "failed to delete the conference"}
            ) 
        }
        res.status(200).json(
            {"success": true, "message": "delete a conference successed", data:{}}
        )
    } 
    catch (err) {
        res.status(400).json(
            {"success": false, "message": err}
        )
    }
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