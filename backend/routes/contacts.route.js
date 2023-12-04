const express = require("express");
const ContactModel = require("../models/contact.model");

const contactRouter = express.Router();

contactRouter.post("/", async (req,res) => {

    try {
        const newContact = new ContactModel(req.body);
        newContact.save();

        res.status(200).send({messsage: "New contact added", newContact: newContact});
    }
    catch(err) {
        res.status(400).send({error: err.message});
    }
})

module.exports = contactRouter;