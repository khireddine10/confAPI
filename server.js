const express = require("express")
const dotenv = require("dotenv");
const app = express();
const PORT = 8080;
const ENV = "DEVELOPMENT";

app.listen(PORT, console.log("The server running on the PORT: "+PORT+" In "+ENV+ " envirenment"))
