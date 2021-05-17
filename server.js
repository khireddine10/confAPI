const express = require("express")
const dotenv = require("dotenv");
const app = express();

dotenv.config({"path":"./config/config.env"})

app.get("/api/v1/list/:confid/all",(req,res) => {
    res.status(200).json(
        {success:true , message: "get all infos about conference"}
    )
})
app.get("/api/v1/list/allconfs",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all conferences"}
    )
})
app.get("/api/v1/list/:confid/particpants",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all particpants"}
    )
})
app.get("/api/v1/list/:confid/particpant/neit",(req,res) => {
    res.status(200).json(
        {success:true, message:"get specific info about user"}
    )
})
app.get("/api/v1/list/:confid/particpant/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all infos about a participant"}
    )
})
app.get("/api/v1/list/:confid/sessions",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all sessions"}
    )
})
app.get("/api/v1/list/:confid/session/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all infos about a session"}
    )
})
app.get("/api/v1/list/:confid/commitees",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all commitees"}
    )
})
app.get("/api/v1/list/:confid/commitee/all",(req,res) => {
    res.status(200).json(
        {success:true, message:"get all about a commitee"}
    )
    res.send("")
})
app.post("/api/v1/create/confid/",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a conference"}
    )
})
app.post("/api/v1/create/:confid/user/",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a user"}
    )
})
app.post("/api/v1/create/:confid/session",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a conf session"}
    )
})
app.post("/api/v1/create/:confid/commite",(req,res) => {
    res.status(200).json(
        {success:true, message:"create a commitee"}
    )
})
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "DEVELOPMENT";

app.listen(PORT, console.log("The server running on the PORT: "+PORT+" In "+ENV+ " envirenment"))
