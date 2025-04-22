const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    originalUrl: { 
        type: String, 
        required: true 
    },
    shortCode: { 
        type: String, 
        required: true, 
        unique: true },
    createdAt: { 
        type: Date, 
        default: Date.now }
});

const LinkModel = mongoose.model('links', LinkSchema)

module.exports = LinkModel