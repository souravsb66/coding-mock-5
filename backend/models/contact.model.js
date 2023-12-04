const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    booked_slots: {
        type: [String]
    }
})

const ContactModel = mongoose.model("contact", contactSchema);

module.exports = ContactModel;