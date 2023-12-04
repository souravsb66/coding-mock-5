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

contactRouter.get("/getAll", async (req,res) => {
    try {
        let contacts = await ContactModel.find();
        res.status(200).send(contacts);
    }
    catch(err) {
        res.status(400).send({error: err.message});
    }
})

contactRouter.get("/getDetails/:contactID", async (req,res) => {

    const {contactID} = req.params;

    try {
        const contact = await ContactModel.findOne({_id: contactID});
    
        if(contact) {
            res.status(200).send(contact);
        }
        else {
            res.status(400).send({error: "Contact not found"});
        }
    }
    catch(err) {
        res.status(400).send({error: err.message});
    }
})

contactRouter.patch("/update/:contactID", async (req,res) => {
    const {contactID} = req.params;
    
    try {    
        const contact = await ContactModel.findOne({_id: contactID});

        if(contact) {
            await ContactModel.findByIdAndUpdate({_id: contactID}, req.body);
            res.status(200).send({message: "Contacted Updated Succesfully"});
        }
        else {
            res.status(400).send({message: "Contact Not Found"});
        }
    }
    catch(err) {
        res.status(400).send({error: err.message});
    }
})

contactRouter.delete("/delete/:contactID", async (req,res) => {
    const {contactID} = req.params;
    
    try {    
        const contact = await ContactModel.findOne({_id: contactID});

        if(contact) {
            await ContactModel.findByIdAndDelete({_id: contactID}, req.body);
            res.status(200).send({message: "Contacted Deleted Succesfully"});
        }
        else {
            res.status(400).send({message: "Contact Not Found"});
        }
    }
    catch(err) {
        res.status(400).send({error: err.message});
    }
})


module.exports = contactRouter;