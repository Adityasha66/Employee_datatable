const mongoose = require('mongoose')

const User = mongoose.model("Employee", {
    name: { type: String },
    email: { type: String },
    address: { type: String },
    phoneNo: { type: String },
    ctc: { type: String }
})

module.exports = User