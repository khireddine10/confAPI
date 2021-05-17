const express = require("express");
const router = express.Router();

router.get("/:confid/all",(req,res) => {
    res.status(200).json(
        {success:true , message: "get all infos about conference"}
    )
})
router.get("/allconfs",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all conferences"}
    )
})
router.get("/:confid/participants",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all particpants"}
    )
})
router.get("/:confid/participant/neit",(req,res) => {
    res.status(200).json(
        {success:true, message:"get specific info about user"}
    )
})
router.get("/:confid/participant/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all infos about a participant"}
    )
})
router.get("/:confid/sessions",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all sessions"}
    )
})
router.get("/:confid/session/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all infos about a session"}
    )
})
router.get("/:confid/commitees",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all commitees"}
    )
})
router.get("/:confid/commitee/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all about a commitee"}
    )
})

module.exports = router;