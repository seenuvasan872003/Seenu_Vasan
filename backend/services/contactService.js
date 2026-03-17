const Contact = require('../models/Contact');

const createContact = async (contactData) => {
    const newContact = new Contact(contactData);
    return await newContact.save();
};

const getAllContacts = async () => {
    return await Contact.find(
        {},
        {
            _id: 0,
            name: 1,
            phone: 1,
            email: 1,
        }
    );
};

module.exports = {
    createContact,
    getAllContacts,
};
