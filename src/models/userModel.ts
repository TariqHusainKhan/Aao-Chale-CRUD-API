const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        trim: true,
    },
    email: {
        type: String,
        trim: true,
    },
    dob: {
        type: Date,
        trim: true,
    },
    otp: {
        type: Number,
        trim: true,
    },
    mobile: {
        type: String,
        unique: true,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
    },
    travelPreferences: {
        type: Array,
        trim: true,
        default: [],
    },
    profileLink: {
        type: String,
        trim: true,
    },
    documentLink: {
        type: String,
        trim: true,
    },
    isMobileVerified: {
        type: Boolean,
        default: false,
        trim: true,
    },
    isDocumentVerified: {
        type: Boolean,
        default: false,
        trim: true,
    },
    lat: {
        type: String,
        trim: true,
    },
    long: {
        type: String,
        trim: true,
    },
    deletedAt: {
        type: Date,
        trim: true,
    }
}, { 
    timestamps: true, 
    versionKey: false 
})

const User = mongoose.model("Users", UserSchema)

module.exports = User