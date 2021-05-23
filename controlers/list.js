const confModel = require("../models/confirence")

exports.getAllConf = async (req,res,next) => {
    try{
        const data = await confModel.find();
        res.status(200).json(
            {
            "succssus": true, 
            "message":"get all conferneces",
            "confNumbers": confModel.length,
            "data": data
            }
        )
    }
    catch(err){
        res.status(400).json(
            {
            "succssus": false, 
            "message": err
            }
        )
    }
};
exports.getConf = async (req,res,next) => {
    try {
        const id = req.params.confid;
        const conf = await confModel.findById(id);
        if(!conf){
            res.status(200).json({
                "success":false,
                "message": "failed to get conference",
            })
        }
        res.status(200).json(
            {
                "success":true,
                "message": "get all informations about a conference",
                "data": conf
            }
        )
    } catch (err) {
        res.status(200).json(
            {
            "success":false,
            "message": err,
            }
        )
    }
};

exports.getUsers = (req,res,next) => {
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