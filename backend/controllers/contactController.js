const contactService = require('../services/contactService');

const submitContactForm = async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        if (!name || !phone || !email) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }

        // Use the service to create the contact
        await contactService.createContact({ name, phone, email });

        res.status(201).json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

const getAllContacts = async (req, res) => {
    try {
        const contacts = await contactService.getAllContacts();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
    console.log("GET Contact API Working");
};

module.exports = {
    submitContactForm,
    getAllContacts,
};
