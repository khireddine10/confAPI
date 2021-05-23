const confModel = require("../models/confirence")

exports.updateConf = async (req,res,next) => {
    try {
        const id = req.params.confid;
        const newData = req.body;
        const data = await confModel.findByIdAndUpdate(
            id,
            newData,
            {
                new: true,
                runValidators: true
            }
        )
        if (!data){
            res.status(400).json(
                {"success":false, "message": "update  conference failed"}
            )    
        }
        res.status(200).json(
            {"success":true, "message": "update  conference", "data": data}
        ) 
    } catch (err) {
        res.status(400).json(
            {"success":false, "message": err}
        )
    }
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