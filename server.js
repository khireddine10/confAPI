const express = require("express")
const dotenv = require("dotenv");
const app = express();
const listRoutes = require("./routes/list");
const creatRouter = require("./routes/create");

dotenv.config({"path":"./config/config.env"})

app.use("/api/v1/list",listRoutes)
app.use("/api/v1/create",creatRouter)

const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "DEVELOPMENT";

app.listen(PORT, console.log("The server running on the PORT: "+PORT+" In "+ENV+ " envirenment"))
