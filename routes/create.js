const express = require("express");
const router = express.Router()

router.post("/conf",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a conference"}
    )
})
router.post("/:confid/user/",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a user"}
    )
})
router.post("/:confid/session",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a conf session"}
    )
})
router.post("/:confid/commite",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a commitee"}
    )
})

module.exports = router;