const express = require("express");
const router = express.Router();
const {getAllConf,getConf,getUser,
       getUserShort,getUserAll,getSessions,
       getSession,getCommitees,getCommitee} = require("../controlers/list")

router.route("/:confid/all").get(getAllConf)
router.route("/allconfs").get(getConf)
router.route("/:confid/participants").get(getUser)
router.route("/:confid/participant/neit").get(getUserShort)
router.route("/:confid/participant/all").get(getUserAll)
router.route("/:confid/sessions").get(getSessions)
router.route("/:confid/session/all").get(getSession)
router.route("/:confid/commitees").get(getCommitees)
router.route("/:confid/commitee/all").get(getCommitee)

module.exports = router;