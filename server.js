const express = require("express")
const dotenv = require("dotenv");
const listRoutes = require("./routes/list");
const creatRouter = require("./routes/create");
const addSomeVars = require("./middlewar/addvars");
const connectionDB = require("./config/dbconnection");


dotenv.config({"path":"./config/config.env"})
connectionDB();

const app = express();
app.use(addSomeVars)

app.use("/api/v1/list",listRoutes)
app.use("/api/v1/create",creatRouter)

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "DEVELOPMENT";

app.listen(PORT, console.log("The server running on the PORT: "+PORT+" In "+ENV+ " envirenment"))