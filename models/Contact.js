const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
