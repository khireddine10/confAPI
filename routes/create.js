const express = require("express");
const router = express.Router()
const {createConf,createUser,createSession,createCommitee} = require("../controlers/create")

router.route("/conf").post(createConf)
router.route("/:confid/user/").post(createUser)
router.route("/:confid/session").post(createSession)
router.route("/:confid/commite").post(createCommitee)

module.exports = router;