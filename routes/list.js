const express = require("express");
const router = express.Router();
const {getAllConf,getConf,getUsers,
       getUserShort,getUserAll,getSessions,
       getSession,getCommitees,getCommitee} = require("../controlers/list")

const {deleteAllConf,deleteConf,deleteUsers,
       deleteUserShort,deleteSessions,
       deleteSession,deleteCommitees,deleteCommitee} = require("../controlers/delete")


       const {updateConf,updateUserShort,
              updateSession,updateCommitee} = require("../controlers/update")       

router.route("/allconfs").get(getAllConf).delete(deleteAllConf)
router.route("/:confid").get(getConf).delete(deleteConf).put(updateConf)
router.route("/:confid/participants").get(getUsers).delete(deleteUsers)
router.route("/:confid/:participant/neit").get(getUserShort).delete(deleteUserShort).put(updateUserShort)
router.route("/:confid/:participant/all").get(getUserAll)
router.route("/:confid/sessions").get(getSessions).delete(deleteSessions)
router.route("/:confid/:session").get(getSession).delete(deleteSession).put(updateSession)
router.route("/:confid/commitees").get(getCommitees).delete(deleteCommitees)
router.route("/:confid/:commitee").get(getCommitee).delete(deleteCommitee).put(updateCommitee)

module.exports = router;