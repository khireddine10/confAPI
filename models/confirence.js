const mongoose = require("mongoose");
const {facebookRegex, instagramRegex, twitterRegex,telegramRegex,
       linkedinRegex, emailRegex, phoneRegex} = require("../utils/validators")
const confSchema = new Schema({
    confNum: Number,
    confName: {
       type: String,
       required: [true, "the name of confirence is required"],
       unique: true
    },
    domain: {
        type: String,
        required: [true, "the domain of confirence is required"]
    },
    address: {
        type: String,
        required: [true, "the location of the confirence"]
    }, //({[]})
    contact: [{
        phone: {
            type: String,
            required: [true, "you must add a phone number for the conference"],
            unique: true,
            match: [
                phoneRegex,
                "please use a valid phone",
            ]
        },
        email: {
            type: String,
            required: [true, "you must add a phone number for the conference"],
            unique: true,
            match: [
                emailRegex,
                "please use valid email",
            ]
        },
        facebook: {
            type: String,
            unique: true,
            match: [
                facebookRegex,
                "please use valid facebook url"
            ]
        },
        instagram: {
            type: String,
            unique: true,
            match: [
                instagramRegex,
                "please use valid instagram url"
            ]
        },
        twitter: {
            type: String,
            unique: true,
            match: [
                twitterRegex,
                "please use valid twitter url",
            ]
        },
        telegram: {
            type: String,
            unique: true,
            match: [
                telegramRegex,
                "please use valid telegram url"
            ]
        },
        linkedin: {
            type: String,
            unique: true,
            match: [
                linkedinRegex,
                "please use valid linkedin url"
            ]
        },
    }],
    date: [{
        startDate: {
            type: Date,
            required: [true, "you must add the starting date"]
        },
        endDate: {
            type: Date,
            required: [true, "you must add the end date"]
        },
        limitInscriptionDate: {
            type: Date,
            required: [true, "you must add the deadline date"]
        },
        acceptDate: {
            type: Date,
            required: [true, "you must add the acceptation date"]
        }
    }],
    president: {},
    speakers: {}
})

const confModel = mongoose.model("confModel", confSchema)

module.exports = confModel;