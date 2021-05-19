const mongoose = require("mongoose");
const dotenv = require("dotenv")

const connectionDB = async () => {
    const connect = await mongoose.connect(process.env.DATA_BASEURL,
        {
            ssl: true,
            sslValidate: true,
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        }
    )
    console.log("database connection to "+connect.connection.host)
}

module.exports = connectionDB;
